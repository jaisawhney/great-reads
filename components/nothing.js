import classNames from "classnames";
import Link from "next/link";
import Star from "./icons/Star";

export default function SearchResult(props) {
  const { key, title, author_name, cover_i } = props.book;
  const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

  return (
    <Link href="">
      <div className="flex flex-row w-full bg-gradient-to-b from-zinc-700/40 h-40 items-start py-4 text-white rounded-sm px-3 md:px-6">
        {/* book cover, column 1 */}
        <div className={classNames("flex h-full items-center w-24 bg-white mr-1 ")}>
          <img src={cover} className={classNames("", "")} />
        </div>

        {/* book title author and button, column 2 */}
        <div className={classNames("flex flex-col pl-2 w-[230px]", "md:mx-4")}>
          {/* title and author */}
          <div className={classNames("flex flex-col text-left")}>
            <h1 className="text-md text-ellipsis overflow-hidden">{title}</h1>
            <h2 className="text-sm text-slate-400 text-ellipsis overflow-hidden">
              {author_name.join(", ")}
            </h2>
          </div>

          {/* add to shelf button */}
          <select
            className="bg-teal-600 w-fit my-2 py-1 px-2 text-xs rounded-sm hover:bg-teal-700 hover:shadow-lg"
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
