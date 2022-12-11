import Link from "next/link";

export default function User(props) {
  const isFollowing = props.usersFollowing.find((user) => user.id === props.user.id);
  return (
    <div className="flex flex-row justify-between bg-slate-600 p-2 items-center rounded-md">
      <Link href={`/users/${props.user.id}`}>{props.user.username}</Link>

      <button
        className="bg-sky-600 hover:bg-sky-700 rounded-lg p-2"
        onClick={() => {
          fetch("/api/users/" + props.user.id + `/${isFollowing ? "unfollow" : "follow"}`).then(
            () => props.refreshFollowing()
          );
        }}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}
