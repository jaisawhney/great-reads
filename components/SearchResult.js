import classNames from "classnames";
import Link from "next/link";
import Star from "../public/icons/Star";

export default function SearchResult(props) {
  const { key, title, author_name, cover_i } = props.book;
  const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

  return (
    <Link href="">
      <div className="flex flex-col w-fit bg-zinc-700/40 rounded-sm  h-480 items-center py-4 text-white rounded-sm px-3 md:px-3">
        {/* book cover, column 1 */}
        <div className={classNames("flex flex-col text-left w-72 pb-4 pl-4")}>
          <h1 className="text-md text-ellipsis overflow-hidden">{title}</h1>

          <h2 className="text-sm text-slate-400 text-ellipsis overflow-hidden pl-3">
            {author_name.join(", ")}
          </h2>
        </div>
        <div className={classNames("flex items-start mr-1 w-36 pb-3")}>
          <img src={cover} className={classNames("", "")} />
        </div>

        {/* book title author and button, column 2 */}

        {/* title and author */}

        {/* add to shelf button */}
        {/* justify at end so all inputs are in the same spot */}
        <div className={classNames("")}>
          <select
            className="button text-xs"
            onChange={props.addToShelf}
            data-olid={key}
            defaultValue={""}>
            <option value="" disabled unselectable="true">
              Add to Shelf
            </option>
            {props.shelves.map((shelf) => (
              <option key={shelf.id} value={shelf.id}>
                {shelf.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Link>
  );
}
