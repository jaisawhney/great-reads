import classnames from "classnames";
import FriendsIcon from "./icons/FriendsIcon";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import ProfileIcon from "./icons/ProfileIcon";
import SearchBar from "./SearchBar";
import SearchIcon from "./icons/SearchIcon";

export default function Header(props) {
  const navItem = "hover:bg-teal-200/50 p-2 rounded-sm transition-all duration-200";

  return (
    // TOPBAR
    <div className={classnames("bg-teal-900 w-full text-stone-100 flex justify-center py-2")}>
      <div className="max-w-[1200px] w-full md:px-6 px-5">
        <div className="flex flex-row items-center justify-between">
          {/* TITLE */}
          <div>
            <Link href="/">
              <a>
                <h1 className="text-xl hover:brightness-200">Great Reads</h1>
              </a>
            </Link>
          </div>

          {/* NAV */}
          <div>
            <ul
              className={classnames(
                "text-sm flex flex-row wrap space-x-2 text-center items-center md:space-x-10"
              )}>
              {/* <li> <Link href="/my-books">Books</Link> </li> */}
              <li className={navItem}>
                <Link href="/add-book">
                  <a>
                    <SearchIcon />
                  </a>
                </Link>
              </li>

              <li className={navItem}>
                <Link href="/my-friends">
                  <a>
                    <FriendsIcon />
                  </a>
                </Link>
              </li>

              {props.userId && (
                <li className={navItem}>
                  <Link href={"/users/" + props.userId}>
                    <a>
                      <ProfileIcon />
                    </a>
                  </Link>
                </li>
              )}

              {props.userId && (
                <li className={navItem}>
                  <LogoutButton />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
