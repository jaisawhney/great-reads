import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FriendTile from "../components/FriendTile";
import classNames from "classnames";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(MyFriends())

function MyFriends() {
  return (
      <main className="flex flex-col text-white md:mx-10">
        <h1 className={classNames("text-md ml-4 pt-3 pb-3", " md:pb-0 md:pt-8")}>Your Friends</h1>
        <div
          className={classNames(
            "flex flex-col space-y-2 flex-wrap",
            "md:flex-row md:justify-start space-y-4"
          )}
        >
          {/* map friends, props will need to be added to FriendTile */}
          <FriendTile />
          <FriendTile />
          <FriendTile />

          <FriendTile />
          <FriendTile />
          <FriendTile />
        </div>
      </main>
  );
}
