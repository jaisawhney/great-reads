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

        <section className={classNames("home-section", "bg-neutral-600/30 md:mt-5")}>
          <img className={classNames("md:-mx-6")} src="/images/cozy-reading.png" />
          <div>
            <h1 className="text-4xl md:text-5xl md:w-full mb-3 mt-2 text-center">
              Hi again, username!
            </h1>
            <div
              className={classNames(
                "flex flex-col text-center space-y-2 w-full text-left mt-7 mb-3",
                "md:mt-12 md:items-start"
              )}>
              <p className="text-xl">Need Another Book?</p>
              <SearchBar />
            </div>
          </div>
        </section>

        <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center space-y-3 md:space-y-7">
            <p className="text-3xl md:w-full text-center px-3">Browse Your Shelves. </p>
            <Link href="">
              <button
                className={classNames(
                  "bg-teal-700 rounded py-1.5 px-8 w-fit my-5 text-xl shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200",
                  "md:mt-12 md:mx-0"
                )}>
                Go to Shelves
              </button>
            </Link>
          </div>
          <img src="/images/bookshelves.png" />
        </section>

        {/* -------------- NEW USER HOMEPAGE ----------------- */}
        {/* <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl md:w-full text-left">Like books? Us too!</p>
            <h1 className="text-4xl md:text-5xl md:w-full mb-3 mt-2 text-center">
              Welcome to Great Reads
            </h1>
            <Link href="/api/auth/login">
              <button
                className={classNames(
                  "bg-teal-700 rounded py-1.5 px-8 w-fit my-5 text-2xl shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200",
                  "md:mt-12 md:mx-0"
                )}>
                Get Started
              </button>
            </Link>
          </div>
          <img src="/images/park-reading.png" className="" />
        </section>

        <section className={classNames("home-section", "")}>
          <img src="/images/bookshelves.png" />
          <div className="flex flex-col items-center space-y-3 md:space-y-7">
            <p className="text-3xl md:text-5xl md:w-full text-left font-bold">
              Organize with Shelves
            </p>
            <p className="text-xl md:w-full text-center px-3">
              We'll make a few to help you get started.
            </p>
          </div>
        </section>

        <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center space-y-2 md:space-y-7 md:text-left">
            <p className="text-3xl md:text-5xl md:w-full font-bold">Did you like it?</p>
            <p className="text-xl px-6 text-center md:px-0 md:w-full md:text-left ">
              Comment and share your opinions with other readers.
            </p>
          </div>
          <img src="/images/share-opinion.png" className="" />
        </section>

        <section className={classNames("home-section", "")}>
          <img src="/images/following.png" />
          <div className="flex flex-col items-center space-y-2 md:space-y-7">
            <p className="text-3xl md:text-5xl md:w-full text-left font-bold">Hey Friend! </p>
            <p className="text-xl md:w-full text-center px-6">
              Follow your friends to stay up to date on their reading.
            </p>
          </div>
        </section>

        <section className={classNames("home-section", "")}>
          <div className="flex flex-col items-center space-y-4 md:space-y-7">
            <p className="text-3xl md:text-5xl md:w-full text-center px-9 font-bold">
              So what are you waiting for?
            </p>
            <p className="text-xl md:w-full text-center px-6">Let's get reading! </p>
            <SearchBar />
          </div>
          <img src="/images/excited-book.png" className="" />
        </section> */}
      </main>
    </div>
  );
}
