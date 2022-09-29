import { useEffect, useState } from "react";
import BookResult from "./BookResult";
export default function BookList(props) {
    const [page, setPage] = useState(1);
    // breaks search results from api into individual books
    // displays as many search results

    useEffect(() => {
        //Update page list
    }, [page]);
    return props.books
        .filter(({ title, author_name }) => title && author_name)
        .map((bookObj, i) => {
            return (
                <BookResult
                    book={bookObj}
                    shelves={props.shelves}
                    addToShelf={props.addToShelf}
                    key={i}
                />
            );
        });
}
