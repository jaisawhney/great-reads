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
      This is the user list page
      {users.map((user) => (
        <>{user.email}</>
      ))}
    </>
  );
}
