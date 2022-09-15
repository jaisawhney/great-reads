import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchResult from "../components/SearchResult"

export default function MyBooks() {
  return (
    <main>
      <SearchResult />
    </main>
  );
}
