import Link from "next/link";
import classnames from "classnames";
import SearchBar from "./SearchBar";
import ProfileIcon from "../public/icons/ProfileIcon";
import classNames from "classnames";
import SearchIcon from "../public/icons/SearchIcon";

export default function Header() {
  const navItem = "";

  return (
    <div
      className={classnames(
        "bg-teal-900/90 w-full text-white/90 top-0 py-3 px-4 lg:px-20 md:px-16 flex flex-row justify-between items-center"
      )}>
      {/* TITLE */}
      <div>
        <Link href="/">
          <h1 className="text-xl">Great Reads</h1>
        </Link>
      </div>

      {/* <SearchBar /> */}

      {/* NAV */}
      <div>
        <div
          className={classnames(
            "text-sm flex flex-row wrap space-x-3 text-center items-center space-x-4"
          )}>
          {/* <li>
            <Link href="/my-books">Books</Link>
          </li> */}

          <Link className="flex flex-row" href="/add-book">
            <div className={classNames("flex flex-row items-center space-x-1 whitespace-nowrap")}>
              <SearchIcon />
              {/* <p>Find Books</p> */}
            </div>
          </Link>

          {/* <li>
            <Link href="/my-friends">Friends</Link>
          </li> */}

          <Link href="/my-profile" className={classNames("")}>
            <div>
              <ProfileIcon />
            </div>
          </Link>

          {/* <li>
            <Link href="/add-friend">Add Friend</Link>
          </li> */}
        </div>
      </div>
    </div>
  );
}
