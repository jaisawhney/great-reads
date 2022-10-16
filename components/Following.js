export default function Following(props) {
  //Just a list of all users that this user is following
  return (
    <>
      {props.following.map((user) => (
        <div className="p-2 border-b-2 border-slate-600">{user.email}</div>
      ))}
    </>
  );
}
