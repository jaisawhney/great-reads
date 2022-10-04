import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ShelfBook from "../components/ShelfBook";
import classNames from "classnames";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(Shelf);

function Shelf() {
    return (
        <main className="">
            {/* shelf title */}
            <h1 className={classNames("text-lg ml-4 pt-3 pb-3", "md:mb-4 md:pb-0 md:pt-8")}>To Read</h1>

            <div
          className={classNames(
            "flex flex-col flex-wrap",
            "md:flex-row md:justify-start"
          )}
        >
                <ShelfBook />
                <ShelfBook />
                <ShelfBook />
                <ShelfBook />
                <ShelfBook />
            </div>

        </main>
    );
}
