import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import classNames from "classnames";

export default withPageAuthRequired(Book);

function Book(props) {
  const router = useRouter();
  const bookId = router.query.bookId;

  const [book, setBook] = useState({});
  const cover = `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;

  async function getBook() {
    const Book = await fetch(`/api/books/${bookId}`).then((res) => res.json());
    setBook(Book);
  }

  useEffect(() => {
    getBook();
  }, []);

  // redo the styling
  return (
    <main>
      <img src={cover} className={classNames("w-12", "md:w-28")} />
      <h1>{book.title}</h1>
    </main>
  );
}
