import Link from "next/link";
import classnames from "classnames";


export default function Header() {
  const navItem = "";

  return (
    <div
      className={classnames(
        "bg-black/90 w-full text-white/90 absolute top-0 px-5 py-3 flex flex-row justify-between items-center"
      )}
    >

      {/* TITLE */}
      <div>
        <h1 className="text-xl">Great Reads</h1>
      </div>

      {/* NAV */}
      <div>
        <ul className={classnames("text-sm flex flex-row md:space-x-10")}>
          <li>
            <Link href="">Books</Link>
          </li>
          <li>
            <Link href="">Reviews</Link>
          </li>
          <li>
            <Link href="">Friends</Link>
          </li>
          <li>
            <Link href="">Profile</Link>
          </li>
        </ul>
      </div>

    </div>
  );
}
