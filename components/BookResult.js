export default function BookResult(props) {
  const { title, author_name, cover_i } = props.book;
  const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

  // breaks individual books down into their specific info (title, author, etc.)
  // displays as single book result
  return (
    <div className="row-auto flex flex-row items-center shadow-md rounded">
      <img src={cover}
          alt="Book thumbnail"
          className="fill-current w-auto rounded-t h-auto" />
        <div className="flex flex-col items-start justify-between leading-normal p-3">
          <p className="font-bold text-md md:text-xl">{title}</p>
          <p className="text-base text-gray-700">{author_name.join(", ")}</p>
          <button type="submit" className="outline-none no-underline hover:underline" onClick={() => {props.addToShelf(bookObj.key)}}>Add to Shelf</button>
        </div>
    </div>
  );
}