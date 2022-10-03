import classNames from "classnames";
import Link from "next/link";
import Star from "../public/icons/Star";

export default function ShelfBook(props) {

  // not sure how api requests work
  // this sample search object doesnt even make sense
  // ignore
  const book = {
    text: "gatsby",
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    img: "/images/sample-cover.jpeg",
    ratings: 2456,
  };

  return (
    <Link href="">
      <div className="flex flex-row w-full bg-zinc-700/60 py-4 text-white rounded-sm border-t-2 border-zinc-200/20 max-w-[800px] px-3 md:px-6"> 

        {/* book cover */}
        <div>
          <img
            src={book["img"]}
            className={classNames("w-12", "md:w-28")}
          />
        </div>

        <div className={classNames("flex flex-col mx-2","md:mx-4")}>

          {/* title and author */}
          <div className={classNames("flex flex-col text-left max-w-48")}>
            <h1 className="">{book["book"]}</h1>
            <h2 className="text-xs text-white/70">By {book["author"]}</h2>
          </div>

        </div>

        {/* stars */}
        <div
          className={classNames(
            "flex flex-col items-end ml-auto",
            ""
          )}
        >
          <div className={classNames("flex flex-row w-24", "")}>
            <Star fill="full" />
            <Star fill="full" />
            <Star fill="full" />
            <Star fill="full" />
            <Star />
          </div>
          <p className="text-xs text-white/50">{book["ratings"]} ratings</p>
        </div>

      </div>
    </Link>
  );
}
