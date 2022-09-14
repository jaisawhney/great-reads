export default function BookList(props) {
  return (
    props.books.length > 0 && props.books
      .filter(({ title, author_name }) => title && author_name)
      .map((result, i) => {
        const { title, author_name, cover_i } = result;
        const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

        return (
          <div className="row-auto flex flex-row items-center shadow-md rounded" key={i}>
            <img src={cover}
                 alt="Book thumbnail"
                 className="fill-current w-auto rounded-t h-auto" />
            <div className="flex flex-col justify-between leading-normal p-3">
              <p className="font-bold text-md md:text-xl">{title}</p>
              <p className="text-base text-gray-700">{author_name.join(", ")}</p>
              <a className="no-underline hover:underline" href="#">Add to Shelf</a>
            </div>
          </div>
        );
      })
  );
}
