import LogoutIcon from "./icons/LogoutIcon";

export default function LogoutButton(props) {
  return (
    <a href="/api/auth/logout" className="flex flex-row items-center space-x-2 justify-end">
      <p>Logout</p>
      <LogoutIcon />
    </a>
  );
}
