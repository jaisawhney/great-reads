import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Comment from "../../components/Comment";
import CommentForm from "../../components/CommentForm";
import BackButton from "../../components/BackButton";

export default withPageAuthRequired(Book);

function Book() {
  const router = useRouter();

  const [book, setBook] = useState({});
  const cover = `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;

  async function getBook() {
    const Book = await fetch(`/api/books/${router.query.bookId}`).then((res) => res.json());
    setBook(Book);
  }

  useEffect(() => {
    getBook();
  }, [router.isReady]);

  // redo the styling & add ratings
  return (
    <main>
      {/* Book Info */}
      <BackButton />
      <div
        className={classNames(
          "flex flex-row w-full text-white py-4 px-3 justify-evenly",
          "md:px-6"
        )}>
        <div className={classNames("flex flex-row justify-center")}>
          <img alt="Book cover" src={cover} className={classNames("w-100")} />
        </div>

        <div className={classNames("flex flex-col mx-2", "md:mx-4")}>
          <div className={classNames("flex flex-col text-left max-w-48")}>
            <h1 className="sm:text-3xl md:text-5xl xl:text-6xl">{book.title}</h1>
            <h2 className="text-xs md:text-xl text-white/70">By {book.author}</h2>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className={classNames("flex flex-col w-full text-white py-4 px-3", "md:px-6")}>
        <div className={classNames("border-b")}>
          <CommentForm book={book} refreshBook={getBook} />
        </div>
        <div>
          {book.comments?.map((comment, i) => {
            return <Comment comment={comment} refreshBook={getBook} key={i} />;
          })}
        </div>
      </div>
    </main>
  );
}
