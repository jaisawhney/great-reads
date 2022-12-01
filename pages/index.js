import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  // ------- TO DO ---------- //
  // more content?
  // different banner for logged in users vs not logged in
  // get started button needs to link somewhere
  // not totally responsive

  return (
    <div>
      <Head>
        <title>Great Reads</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-0 px-0">
        {/* -------------- RETURNING USER HOMEPAGE ----------------- */}

        <section
          className={classNames("home-section reverse-wrap mt-3 md:mt-5", "bg-neutral-600/30")}>
          <img className={classNames("md:-ml-24 md:max-w-fit")} src="/images/cozy-reading.png" />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:w-full mb-3 mt-2 text-center font-semibold">
              Hi again, username!
            </h1>
            <div
              className={classNames(
                "flex flex-col text-center space-y-2 w-full text-left mt-7 mb-3",
                "md:mt-12 items-center"
              )}>
              <p className="text-xl text-neutral-400 mb-2">Need Another Book?</p>
              <SearchBar />
            </div>
          </div>
        </section>

        <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center md:space-y-4">
            <p className="text-3xl md:w-full text-center px-3 md:mb-3">Browse Your Shelves. </p>
            <Link href="">
              <button
                className={classNames(
                  "bg-teal-800 rounded py-1 px-8 w-fit my-5 text-md shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200",
                  "md:mb-12 md:mx-0"
                )}>
                Go to Shelves
              </button>
            </Link>
          </div>
          <img src="/images/bookshelves.png" />
        </section>

        {/* -------------- NEW USER HOMEPAGE ----------------- */}
        <section className={classNames("home-section", "md:mt-4")}>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-2xl md:w-full text-center text-neutral-400">
              Like books? Us too!
            </p>
            <h1 className="text-4xl md:text-4xl md:w-full mb-3 mt-2 text-center font-semibold">
              Welcome to Great Reads.
            </h1>
            <Link href="/api/auth/login">
              <button
                className={classNames(
                  "bg-teal-800 rounded py-1 px-8 w-fit my-5 text-md shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200",
                  "md:mt-6 md:mx-0"
                )}>
                Get Started
              </button>
            </Link>
          </div>
          <img src="/images/park-reading.png" className="max-w-[40vw] min-w-[300px]" />
        </section>

        <section className={classNames("home-section reverse-wrap", "")}>
          <img src="/images/bookshelves.png" className="max-w-[40vw] min-w-[300px]" />
          <div className="flex flex-col items-center space-y-3 md:HERE!!">
            <p className="text-3xl md:text-4xl md:w-full text-left font-semibold">
              Organize with Shelves
            </p>
            <p className="text-xl md:w-full text-center px-3 text-neutral-400">
              We'll make a few to help you get started.
            </p>
          </div>
        </section>

        <section className={classNames("home-section ", "")}>
          <div className="flex flex-col items-center space-y-2 md:HERE!! md:text-left">
            <p className="text-3xl md:text-4xl md:w-full font-semibold">Did you like it?</p>
            <p className="text-xl px-6 text-center md:px-0 md:w-full md:text-left text-neutral-400">
              Comment and share your opinions with other readers.
            </p>
          </div>
          <img src="/images/share-opinion.png" className="max-w-[40vw] min-w-[300px]" />
        </section>

        <section className={classNames("home-section reverse-wrap", "")}>
          <img src="/images/following.png" className="max-w-[40vw] min-w-[300px]" />
          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <p className="text-3xl md:text-4xl md:w-full text-left font-semibold">Hey Friend! </p>
            <p className="text-xl md:w-full px-6 text-neutral-400 md:px-0">
              Follow your friends to stay up to date on their reading.
            </p>
          </div>
        </section>

        <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center md:space-y-4">
            <p className="text-3xl md:text-4xl md:w-full text-center px-2 font-semibold">
              So what are you waiting for?
            </p>
            <p className="text-xl md:w-full text-center px-6 text-neutral-400 mt-2 mb-7">
              Let's get reading!
            </p>
            <SearchBar />
          </div>
          <img src="/images/excited-book.png" className="max-w-[40vw] min-w-[300px]" />
        </section>
      </main>
    </div>
  );
}
