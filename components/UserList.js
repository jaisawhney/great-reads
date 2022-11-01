import User from "./User";

export default function UserList(props) {
  return props.users.map((user) => {
    return <User user={user} />;
  });
}
