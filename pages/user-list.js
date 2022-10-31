import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

export default withPageAuthRequired(userList);

function userList(props) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function runGet() {
      const response = await fetch("/api/users").then((response) => response.json());
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

    // Escape string before .search
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
        {filteredUsers.map((user) => (
          <div className="flex flex-row justify-between bg-slate-600 p-2 items-center rounded-md">
            <p>{user.email}</p>
            <button
              className="bg-sky-600 hover:bg-sky-700 rounded-lg p-2"
              onClick={() => {
                //Follow this user
                fetch("/api/users/" + user.id + "/follow").then((response) => response.json());
              }}>
              Follow
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
