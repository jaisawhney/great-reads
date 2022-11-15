import classNames from "classnames";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className={classNames(
        "flex flex-col-reverse justify-between",
        "md:flex-row md:items-center md:space-x-4"
      )}>
      <div className={classNames("flex flex-col items-center my-3", "md:items-start")}>
        {/* welcome */}
        <h1 className={classNames("text-3xl text-center", "md:text-4xl md:mb-3")}>
          Read anything lately?
        </h1>

        {/* message */}
        <p className={classNames("text-wrap text-lg my-4 text-stone-400", "md:text-xl md:my-0")}>
          Meet Great Reads. Your all-in-one place to explore books, write reviews, set goals, and
          track your reading.
        </p>

        {/* get started button */}
        <Link href="/api/auth/login">
          <button
            className={classNames(
              "bg-teal-700/80 rounded py-1.5 px-8 w-fit my-5 text-lg shadow-lg hover:brightness-75 hover:shadow-xl transition-all duration-200",
              "md:mt-12 md:mx-0"
            )}>
            Get Started
          </button>
        </Link>
      </div>
      <div>
        <img src="/images/sweater.jpg" className=" md:max-w-[600px] h-fit mx-2" id="banner-image" />
      </div>
    </div>
  );
}
