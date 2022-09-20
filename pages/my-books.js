import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchResult from "../components/SearchResult"
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(MyBooks)
function MyBooks() {
  return (
    <main>
      <SearchResult />
    </main>
  );
}
