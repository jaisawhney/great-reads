import { Menu } from "@headlessui/react";
import ProfileIcon from "./icons/ProfileIcon";
import LogoutButton from "./LogoutButton";

export default function ProfileDropdown(props) {
  const DropdownStyle = "hover:bg-teal-200/30 w-36 py-4 px-6 text-right";

  return (
    <div className="w-fit flex flex-col items-end">
      <Menu>
        <Menu.Button className="h-[24px]">
          {/* if logged in, show profile picture */}
          {/* otherwise show profile icon */}
          <ProfileIcon />
        </Menu.Button>

        <Menu.Items className="right-0 md:right-auto flex flex-col absolute items-end bg-neutral-900/80 backdrop-blur md:rounded-b-sm mt-[40px] md:-mr-3">
          {props.userId && (
            <Menu.Item className={DropdownStyle}>
              {({ active }) => (
                <a className="" href={"/users/" + props.userId}>
                  My Profile
                </a>
              )}
            </Menu.Item>
          )}

          {props.userId && (
            <Menu.Item className={DropdownStyle}>
              {({ active }) => (
                <a className="">
                  <LogoutButton />
                </a>
              )}
            </Menu.Item>
          )}

          {!props.userId && (
            <Menu.Item className={DropdownStyle}>
              {({ active }) => (
                <a href="/api/auth/login">
                  <p>join</p>
                </a>
              )}
            </Menu.Item>
          )}
        </Menu.Items>

        {/* ------------- show if NOT logged in ------------- */}
        {/* <Menu.Items className="flex flex-col absolute items-end bg-neutral-500 rounded-b mt-[40px]">
          <Menu.Item className={DropdownStyle}>
            {({ active }) => (
              <a className="" href="">
                Sign Up
              </a>
            )}
          </Menu.Item>

          <Menu.Item className={DropdownStyle}>{({ active }) => <a>Login </a>}</Menu.Item>
        </Menu.Items> */}
      </Menu>
    </div>
  );
}
