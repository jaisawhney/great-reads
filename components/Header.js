import Link from "next/link";
import classnames from "classnames";

export default function Header() {
    const navItem = "";

    return (
        <div
            className={classnames(
                "bg-teal-900/90 w-full text-white/90 absolute top-0 px-5 py-3 flex flex-row justify-between items-center"
            )}>
            {/* TITLE */}
            <div>
                <Link href="/">
                    <h1 className="text-xl">Great Reads</h1>
                </Link>
            </div>

            {/* NAV */}
            <div>
                <ul
                    className={classnames(
                        "text-sm flex flex-row wrap space-x-2 text-center items-center md:space-x-10"
                    )}>
                    {/* <li>
                      <Link href="/my-books">Books</Link>
                    </li> */}
                    <li>
                        <Link href="/add-book">Search</Link>
                    </li>
                    <li>
                        <Link href="/my-friends">Friends</Link>
                    </li>
                    <li>
                        <Link href="/my-profile">Profile</Link>
                    </li>
                    {/* <li>
                      <Link href="/add-friend">Add Friend</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}
