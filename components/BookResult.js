import classNames from "classnames";

export default function BookResult(props) {
  const { key, title, author_name, cover_i } = props.book;
  const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

  // breaks individual books down into their specific info (title, author, etc.)
  // displays as single book result
  return (
    <div className="flex flex-row w-full bg-zinc-700 py-4 text-white rounded-sm border-t-4 border-zinc-200/40 max-w-[800px] px-3 md:px-6">
      {/* book cover */}
      <div>
        <img src={cover} alt="Book thumbnail" className={classNames("w-12", "md:w-28")} />
      </div>

      <div className={classNames("flex flex-col mx-2", "md:mx-4")}>
        {/* title and author */}
        <div className={classNames("text-left max-w-48")}>
          <p className="font-bold text-md md:text-xl">{title}</p>
          <p className="text-base text-gray-700">{author_name.join(", ")}</p>
        </div>

        {/* add to shelf button */}
        <select
          className="bg-teal-600 w-fit my-2 py-1 px-2 text-sm rounded-sm hover:bg-teal-700 hover:shadow-lg"
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
  );
}
