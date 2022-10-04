import classNames from "classnames";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className={classNames(
        "bg-[url('/images/guy-reading.jpg')] bg-right bg-cover py-5",
        "md:relative md:bg-right md:h-[100vh] md:py-0"
      )}>
      {/* content within image */}
      <div
        className={classNames(
          "flex flex-col justify-start py-12 px-5 backdrop-blur-sm",
          "md:max-w-[60vw] text-white bg-black/60 md:px-12 md:h-[100vh] md:py-32"
        )}>
        {/* welcome */}
        <h1 className={classNames("text-md text-white/80 mb-5", "md:text-lg")}>
          Welcome to Great Reads!
        </h1>

        {/* message */}
        <p className={classNames("text-wrap text-4xl pr-8", "md:text-5xl md:pr-4")}>
          Your all-in-one place to explore books, write reviews, set goals, and track your reading.
        </p>

        {/* get started button */}
        {/* link where?? search for now */}
        <Link href="/add-book">
          <button className={classNames("text-lg mt-4 ml-auto mr-10 button", "")}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
