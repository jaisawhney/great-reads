import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { useRouter } from "next/router";
import classNames from "classnames";

export default withPageAuthRequired(userList);

function userList() {
  const { user } = useUser();

  const router = useRouter();
  const searchParam = router.query.search;

  const [users, setUsers] = useState([]);
  const [usersFollowing, setFollowing] = useState([]);

  // Get the current user's followers
  async function getFollowing() {
    const response = await fetch(`/api/users/${user.internalId}/following`).then((res) =>
      res.json()
    );
    setFollowing(response);
  }

  // Search for the users that can be followed
  async function getUsers() {
    const url = "/api/users" + (searchParam ? `?search=${searchParam}` : "");
    const response = await fetch(url).then((response) => response.json());
    setUsers(response);
  }

  useEffect(() => {
    getFollowing().catch(console.error);
    getUsers().catch(console.error);
  }, [searchParam]);

  // Update the search param
  function searchSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    router.push(`/user-list?search=${username}`);
  }

  return (
    <main>
      <div className="flex flex-col p-2 space-y-2">
        <p className="text-3xl">All users</p>

        <form
          onSubmit={searchSubmit}
          className={classNames(
            "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between"
          )}>
          <input
            className={classNames("w-full px-2 py-1 border text-black")}
            name="username"
            type="text"
            placeholder="Search for a friend"
            required
          />
          <button className={classNames("mx-1")} type="submit">
            Submit
          </button>
        </form>
        <UserList
          users={users}
          usersFollowing={usersFollowing}
          refreshFollowing={getFollowing}
          user={user}
        />
      </div>
    </main>
  );
}
