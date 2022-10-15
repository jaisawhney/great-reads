import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
export default withPageAuthRequired(userList);

function userList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function runGet() {
      const response = await fetch("/api/users").then((response) => response.json());
      setUsers(response);
    }
    runGet();
  });
  return (
    <>
      <div className="flex flex-col p-2 space-y-2">
        <p className="text-3xl">All users</p>
        {users.map((user) => (
          <>
            <div className="flex flex-row justify-between bg-slate-600 p-2 items-center rounded-md">
              <p>{user.email}</p>
              <button className="bg-sky-600 rounded-lg p-2">Follow</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
