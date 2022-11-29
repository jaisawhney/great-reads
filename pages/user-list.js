import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { useRouter } from "next/router";

export default withPageAuthRequired(userList);

function userList() {
  const { user } = useUser();

  const router = useRouter();
  const searchParam = router.query.search;

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function runGet() {
      const response = await fetch(`/api/users?search=${searchParam}`).then((response) =>
        response.json()
      );
      setUsers(response);
      setFilteredUsers(response);
    }

    runGet().catch(console.error);
  }, []);

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.email.search(filter) !== -1));
  }, [filter]);

  function updateFilter(e) {
    e.preventDefault();

    const escapedString = e.target.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    setFilter(escapedString);
  }

  return (
    <main>
      <div className="flex flex-col p-2 space-y-2">
        <p className="text-3xl">All users</p>

        <input
          className="w-full px-2 py-1 border bg-slate-100 text-black"
          type="text"
          placeholder="Filter by user"
          onChange={updateFilter}
        />
        <UserList users={filteredUsers} user={user} />
      </div>
    </main>
  );
}
