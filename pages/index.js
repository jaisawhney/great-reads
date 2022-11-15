import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
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
        <Banner />
        <SearchBar />
      </main>
    </div>
  );
}
