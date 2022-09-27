import classNames from "classnames";
import Link from "next/link";
import Star from "../public/icons/Star";

export default function SearchResult(props) {

  // not sure how api requests work
  // this sample search object doesnt even make sense
  // ignore
  const search = {
    text: "gatsby",
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    img: "/images/sample-cover.jpeg",
    ratings: 2456,
  };

  return (
    <Link href="">
      <div className="flex flex-row w-full bg-zinc-700 py-4 my-2 text-white rounded-sm border-t-4 border-zinc-200/40 max-w-[800px] px-3 md:px-6"> 

        {/* book cover */}
        <div>
          <img
            src={search["img"]}
            className={classNames("w-12", "md:w-28")}
          />
        </div>

        <div className={classNames("flex flex-col mx-2","md:mx-4")}>

          {/* title and author */}
          <div className={classNames("flex flex-col text-left max-w-48")}>
            <h1 className="">{search["book"]}</h1>
            <h2 className="text-xs text-white/70">By {search["author"]}</h2>
          </div>

          {/* FUTURE SOMEONE */}
          {/* create dropdown menu for add to shelf, showing shelves */}

          {/* add to shelf */}
          <Link href="">
            <div className="">
              <p className="bg-teal-600 w-fit my-2 py-1 px-6 text-sm rounded-sm hover:bg-teal-700 hover:shadow-lg">
                Add to Shelf
              </p>
            </div>
          </Link>
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
          <p className="text-xs text-white/50">{search["ratings"]} ratings</p>
        </div>

      </div>
    </Link>
  );
}
