import User from "./User";

export default function UserList(props) {
  return props.users
    .filter((user) => user.id !== props.user.internalId)
    .map((user) => {
      return (
        <User
          user={user}
          usersFollowing={props.usersFollowing}
          refreshFollowing={props.refreshFollowing}
          key={user.id}
        />
      );
    });
}
