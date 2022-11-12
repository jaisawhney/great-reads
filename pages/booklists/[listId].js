import ShelfBook from "../../components/ShelfBook";
import classNames from "classnames";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BackArrow from "/public/icons/BackArrow";
export default withPageAuthRequired(ListId);

function ListId() {
  const router = useRouter();
  const listId = router.query.listId;

  const [shelf, setShelf] = useState([]);
  const [books, setBooks] = useState([]);

  async function getShelf() {
    const Shelf = await fetch(`/api/booklists/${listId}`).then((res) => res.json());
    setShelf(Shelf);
  }

  async function getShelfBooks() {
    const shelfBooks = await fetch(`/api/booklists/${listId}/books`).then((res) => res.json());
    setBooks(shelfBooks);
  }

  useEffect(() => {
    getShelf();
    getShelfBooks();
  }, []);

  return (
    <main className="">
      <div className={classNames("flex flex-row")}>
        <Link href="/my-profile">
          <div className={classNames("pt-6")}>
            <BackArrow />
          </div>
        </Link>
        {/* shelf title */}
        <div className={classNames("flex flex-col")}>
          <h1 className={classNames("text-lg ml-4 pt-3", "md:pb-0 md:pt-8")}>{shelf.title}</h1>
          <p className={classNames("text-sm ml-4 pb-3", "md:mb-4 md:pb-0")}>{shelf.description}</p>
        </div>
      </div>
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
