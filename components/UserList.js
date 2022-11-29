import User from "./User";

export default function UserList(props) {
  return props.users
    .filter((user) => user.id !== props.user.internalId)
    .map((user) => {
      return <User user={user} key={user.id} />;
    });
}
