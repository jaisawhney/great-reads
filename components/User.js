export default function User(props) {
  return (
    <div className="flex flex-row justify-between bg-slate-600 p-2 items-center rounded-md">
      <p>{props.user.username}</p>
      <button
        className="bg-sky-600 hover:bg-sky-700 rounded-lg p-2"
        onClick={() => {
          fetch("/api/users/" + props.user.id + "/follow").then((response) => response.json());
        }}>
        Follow
      </button>
    </div>
  );
}
