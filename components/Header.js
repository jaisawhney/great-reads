import Link from "next/link";
import classnames from "classnames";
import SearchBar from "./SearchBar";
import ProfileIcon from "./icons/ProfileIcon";
import classNames from "classnames";
import SearchIcon from "./icons/SearchIcon";
import LogoutButton from "./LogoutButton";
import FriendsIcon from "./icons/FriendsIcon";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  const navItem = "hover:bg-teal-200/50 p-2 rounded-sm transition-all duration-200";

  return (
    // TOPBAR
    <div className={classnames("bg-teal-900 w-full text-stone-100 flex justify-center py-2")}>
      <div className="max-w-[1200px] w-full md:px-6 px-5">
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
            <ul className={classnames("flex flex-row space-x-2 items-center md:space-x-10")}>
              {/* <li>
              <Link href="/my-books">Books</Link>
            </li> */}
              <li className={navItem}>
                <Link href="/add-book">
                  <a>
                    <SearchIcon />
                  </a>
                </Link>
              </li>
              {/* <li className={navItem}>
                <Link href="/my-friends">
                  <a>
                    <FriendsIcon />
                  </a>
                </Link>
              </li> */}
              {/* <Link href="/my-profile">
                  <a>
                    <ProfileIcon />
                  </a>
                </Link> */}
              <li className={navItem}>
                {/* <Link href="/add-book"> */}
                {/* <a> */}
                <ProfileDropdown />
                {/* </a> */}
                {/* </Link> */}
              </li>
              {/* <li className={navItem}>
                <Link href="/user-list" className={classNames("")}>
                  <a>
                    <p>Users</p>
                  </a>
                </Link>
              </li> */}
              {/* <li className={navItem}>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
