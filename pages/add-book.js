import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(AddBook);

function AddBook() {
    const [searchResults, setSearchResults] = useState([]);
    const [userShelves, setUserShelves] = useState([]);

    async function getShelves() {
        const shelves = await fetch(`/api/users/1/booklists`).then((res) => res.json());
        setUserShelves(shelves);
    }

    useEffect(() => {
        getShelves();
    }, []);

    function searchSubmit(e) {
        e.preventDefault();

        const bookTitle = e.target.elements.bookName?.value;
        if (!bookTitle) return;

        fetch(`/api/search?q=${bookTitle}`)
            .then((res) => res.json())
            .then((res) => {
                return setSearchResults(res.docs);
            });
    }

    function addToShelf(e) {
        const olID = e.target.dataset.olid;
        const shelfID = e.target.value;
        e.target.selectedIndex = 0;

        fetch(`/api/books`, {
            method: "POST",
            body: JSON.stringify({
                olID: olID,
                shelfID: parseInt(shelfID),
            }),
        }).then((res) => {
            // TODO: Replace the lines below
            if (!res.ok) return alert("Error while adding book!");

            if (res.status === 200) {
                alert("Book already in shelf!");
            } else {
                alert("Book added!");
            }
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Book Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {/* search bar */}
                <form onSubmit={searchSubmit} className="border rounded shadow-sm w-fit">
                    <input
                        className="p-2 w-64"
                        name="bookName"
                        type="text"
                        placeholder="Book Title"
                        required
                    />
                    <input className="px-2 w-fit" type="submit" />
                </form>
                <BookList books={searchResults} shelves={userShelves} addToShelf={addToShelf} />
            </main>
        </div>
    );
}
