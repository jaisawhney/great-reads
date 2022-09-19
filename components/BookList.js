export default function BookList(props) {
  return (
    props.books
      .filter(({ title, author_name }) => title && author_name)
      .map((bookObj, i) => {
        const { title, author_name, cover_i } = bookObj;
        const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
        return (
          <div className="row-auto flex flex-row items-center shadow-md rounded" key={i}>
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
      })
  );
}