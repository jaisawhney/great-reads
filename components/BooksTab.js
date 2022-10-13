import ShelfBook from "./ShelfBook";
import { useEffect, useState } from "react";

export default function BooksTab(props) {
  const [books, setBooks] = useState([]);

  async function setUserBooks() {
    const books = await fetch(`/api/users/${props.user.sub}/books`).then((res) => res.json());
    setBooks(books);
  }

  useEffect(() => {
    setUserBooks();
  }, []);

  // TODO: Should we add a dropdown to filter by shelf?
  return (
    <main>
      {books.map((book) => {
        return <ShelfBook book={book} />;
      })}
    </main>
  );
}
