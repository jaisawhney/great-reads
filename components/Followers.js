export default function Followers(props) {
  //Just a page that list everyone we follow
  return (
    <>
      {props.followers.map((user) => (
        <div className="p-2 border-b-2 border-slate-600">{user.email}</div>
      ))}
    </>
  );
}
