import { useEffect, useState } from "react";
import { getServerSidePropsWrapper, getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Head from "next/head";
import BookList from "../components/BookList";
import classNames from "classnames";
import SearchIcon from "../components/icons/SearchIcon";
import NotificationBar from "../components/NotificationBar";

export default function AddBook(props) {
  const { user } = props;

  /* Notification bar msg */
  const [barMsg, setBarMsg] = useState("");
  const [barVisibility, setBarVisibility] = useState(false);

  function displayBar(msg) {
    setBarMsg(msg);
    setBarVisibility(true);
  }

  /* Pre set search value */
  const router = useRouter();
  const queryBookTitle = router.query.title;

  // Search for a book if a parameter is supplied
  useEffect(() => {
    if (!router.isReady) return;

    if (queryBookTitle) fetchBooks(queryBookTitle);
  }, [router.isReady]);

  /* User's book shelves */
  const [searchResults, setSearchResults] = useState([]);
  const [userShelves, setUserShelves] = useState([]);

  async function getShelves() {
    const shelves = await fetch(`/api/users/${user.internalId}/booklists`).then((res) =>
      res.json()
    );
    setUserShelves(shelves);
  }

  // Get shelves on load
  useEffect(() => {
    if (user) getShelves();
  }, []);

  /* Book searching */
  function fetchBooks(bookTitle) {
    fetch(`/api/search?q=${bookTitle}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.docs);
      });
  }

  // Search on submit
  function handleSubmit(e) {
    e.preventDefault();
    const bookTitle = e.target.elements.bookName?.value;

    if (bookTitle) fetchBooks(bookTitle);
  }

  /* Add to shelf */
  function addToShelf(e) {
    const olID = e.target.dataset.olid;
    const shelfID = e.target.value;
    e.target.selectedIndex = 0;

    fetch(`/api/books`, {
      method: "POST",
      body: JSON.stringify({
        olID: olID,
        shelfID: parseInt(shelfID),
      }),
    }).then((res) => {
      if (!res.ok) return displayBar("Error while adding book!");

      if (res.status === 200) {
        displayBar("Book already in shelf!");
      } else {
        displayBar("Book added!");
      }
    });
  }

  /* Pagination  */
  const [page, setPage] = useState(1);
  const [pageResults, setPageResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //Results page page
  const resultsPerPage = 9;
  useEffect(() => {
    setPageCount(Math.ceil(searchResults.length / resultsPerPage));
    setPage(1);
  }, [searchResults]);

  //Set page results
  useEffect(() => {
    if (searchResults.length > 0) {
      const subset = searchResults.slice(
        page * resultsPerPage - resultsPerPage,
        page * resultsPerPage
      );
      setPageResults(subset);
    }
  }, [page, searchResults]);

  return (
    <div className="">
      <Head>
        <title>Book Search</title>
      </Head>

      <main className={classNames("items-center")}>
        <div className={classNames("py-6")}>
          <NotificationBar
            visibility={barVisibility}
            setVisibility={setBarVisibility}
            message={barMsg}
          />
        </div>

        {/* search bar */}
        <form
          onSubmit={handleSubmit}
          className={classNames(
            "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between mb-5"
          )}>
          <input
            className="w-full px-2 py-1"
            name="bookName"
            type="text"
            placeholder="Book Title, Author, Genre, etc."
            defaultValue={queryBookTitle}
            required
          />
          <button className={classNames("mx-1")} type="submit">
            <SearchIcon />
          </button>
          {/* <input className="px-2 w-fit" type="submit" /> */}
        </form>

        {/* search results */}
        <div
          className={classNames(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3"
          )}>
          <BookList books={pageResults} shelves={userShelves} addToShelf={addToShelf} />
        </div>
        {/* pagination */}
        {/* <p>Results</p> */}
        <div className="flex flex-row space-x-3 mb-5 mt-7 justify-center">
          {[...Array(pageCount)].map((option, index) => (
            <p
              className={page === index + 1 ? "underline" : null}
              key={index}
              onClick={() => setPage(index + 1)}>
              {index + 1}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = getServerSidePropsWrapper(async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  return {
    props: {
      user: session?.user || null,
    },
  };
});
