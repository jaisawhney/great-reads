import classNames from "classnames";
import Link from "next/link";
import BookStars from "./BookStars";

export default function ShelfBook(props) {
  const { title, author, coverId, rating } = props.book;
  const cover = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  return (
    <Link href="">
      <div className="flex flex-row w-full bg-zinc-700/60 py-4 text-white rounded-sm border-t-2 border-zinc-200/20 max-w-[800px] px-3 md:px-6">
        {/* book cover */}
        <div>
          <img src={cover} className={classNames("w-12", "md:w-28")} />
        </div>

        <div className={classNames("flex flex-col mx-2", "md:mx-4")}>
          {/* title and author */}
          <div className={classNames("flex flex-col text-left max-w-48")}>
            <h1 className="">{title}</h1>
            <h2 className="text-xs text-white/70">By {author}</h2>
          </div>
        </div>

        {/* stars */}
        <div className={classNames("flex flex-col items-end ml-auto", "")}>
          <div className={classNames("flex flex-row w-24", "")}>
            <BookStars averageRating={rating.average} />
          </div>
          <p className="text-xs text-white/50">{rating.count} ratings</p>
        </div>
      </div>
    </Link>
  );
}
