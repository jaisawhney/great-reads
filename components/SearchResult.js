import classNames from "classnames";
import Link from "next/link";
import Star from "./icons/Star";

export default function SearchResult(props) {
  const { key, title, author_name, cover_i } = props.book;
  var cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
  if (!cover_i) {
    cover = "/images/book-logo.png";
  }

  return (
    <Link href="">
      <div className="flex flex-col max-w-56 max-h-fit bg-zinc-700/40 rounded-sm items-center text-white rounded-sm">
        {/* book cover, column 1 */}
        <div className={classNames("flex items-start pb-3 mt-8")}>
          <img src={cover} className={classNames("max-h-64 w-100")} />
        </div>
        <div className={classNames("max-h-32 text-left w-36 pb-0 justify-self-end")}>
          <h1 className="text-md truncate text-ellipsis overflow-hidden">{title}</h1>

          <h2 className="text-sm text-slate-400 text-ellipsis hover:text-clip">
            {author_name.join(", ")}
          </h2>
        </div>

        {/* book title author and button, column 2 */}

        {/* title and author */}

        {/* add to shelf button */}
        {/* justify and align at basline so all inputs are in the same size in the same spot */}
        <div className={classNames("bg-teal-900 w-56 h-8 absolute")}>
          <select
            className="button text-xs bg-teal-900 w-56 h-8"
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
