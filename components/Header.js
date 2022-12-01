import classnames from "classnames";
import FriendsIcon from "./icons/FriendsIcon";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import ProfileIcon from "./icons/ProfileIcon";
import SearchBar from "./SearchBar";
import SearchIcon from "./icons/SearchIcon";
import ProfileDropdown from "./ProfileDropdown";
import { userAgent } from "next/server";

export default function Header(props) {
  const navItem =
    "hover:bg-teal-200/50 active:bg-teal-200/50 p-2 rounded-sm transition-all duration-200 block md:hidden";

  return (
    // TOPBAR
    <div className={classnames("bg-teal-900 w-full text-stone-100 flex justify-center py-1")}>
      <div className="page-wrapper">
        <div className="flex flex-row items-center justify-between">
          {/* TITLE */}
          <div>
            <Link href="/">
              <a className="flex flex-row items-center space-x-2">
                <img className="w-12 h-12" src="/images/book-logo.png"></img>
                <h1 className="text-xl hover:brightness-200">Great Reads</h1>
              </a>
            </Link>
          </div>

          {/* NAV */}
          <div>
            <ul
              className={classnames(
                "text-sm flex flex-row wrap space-x-2 text-center items-center justify-center md:space-x-10"
              )}>
              <div className={navItem}>
                <Link href="/add-book">
                  <a>
                    <SearchIcon />
                  </a>
                </Link>
              </div>
              <div className="md:block hidden flex items-center">
                <SearchBar />
              </div>
              <ProfileDropdown userId={props.userId} navItem={navItem} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
