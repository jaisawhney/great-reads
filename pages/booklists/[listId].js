import ShelfBook from "../../components/ShelfBook";
import classNames from "classnames";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default withPageAuthRequired(ListId);

function ListId() {
  const { user } = useUser();

  const router = useRouter();
  const listId = router.query.listId;

  const [books, setBooks] = useState([]);

  async function setUserBooks() {
    const books = await fetch(`/api/booklists/${listId}/books`).then((res) => res.json());
    setBooks(books);
  }

  useEffect(() => {
    setUserBooks();
  }, []);

  return (
    <main className="">
      {/* shelf title */}
      <h1 className={classNames("text-lg ml-4 pt-3 pb-3", "md:mb-4 md:pb-0 md:pt-8")}>{}</h1>
      <p className={classNames("text-lg ml-4 pt-3 pb-3", "md:mb-4 md:pb-0 md:pt-8")}>{}</p>

      <div className={classNames("flex flex-col flex-wrap", "md:flex-row md:justify-start")}>
        <main>
          {books.map((book) => {
            return <ShelfBook book={book} />;
          })}
        </main>
      </div>
    </main>
  );
}
