import { Menu } from "@headlessui/react";
import ProfileIcon from "./icons/ProfileIcon";
import LogoutButton from "./LogoutButton";

export default function ProfileDropdown(props) {
  const DropdownStyle = "hover:bg-teal-200/30 w-36 py-4 px-6 text-right";
  const navStyles = props.navStyles;

  return (
    <div className="w-fit flex flex-col items-end">
      {!props.userId && (
        <a href="api/auth/login">
          <p>Join</p>
        </a>
      )}

      {props.userId && (
        <Menu>
          <Menu.Button className=" hover:bg-teal-200/50 p-2 rounded-sm">
            <ProfileIcon />
          </Menu.Button>

          <Menu.Items className="right-0 md:right-auto flex flex-col absolute items-end bg-neutral-900/80 backdrop-blur md:rounded-b-sm mt-[48px] z-50">
            <Menu.Item className={DropdownStyle}>
              {({ active }) => (
                <a className="" href={"/users/" + props.userId}>
                  My Profile
                </a>
              )}
            </Menu.Item>

            <Menu.Item className={DropdownStyle}>
              {({ active }) => (
                <a className="">
                  <LogoutButton />
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </div>
  );
}
