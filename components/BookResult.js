export default function BookResult(props) {
    const { key, title, author_name, cover_i } = props.book;
    const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

    // breaks individual books down into their specific info (title, author, etc.)
    // displays as single book result
    return (
        <div className="row-auto flex flex-row items-center shadow-md rounded">
            <img
                src={cover}
                alt="Book thumbnail"
                className="fill-current w-auto rounded-t h-auto"
            />
            <div className="flex flex-col items-start justify-between leading-normal p-3">
                <p className="font-bold text-md md:text-xl">{title}</p>
                <p className="text-base text-gray-700">{author_name.join(", ")}</p>
                <select onChange={props.addToShelf} data-olid={key} defaultValue={""}>
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
