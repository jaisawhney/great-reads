import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import BookList from "../components/BookList";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(AddBook);

function AddBook() {
    const [searchResults, setSearchResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        const bookTitle = e.target.elements.bookName?.value;
        if (!bookTitle) return;

        fetch(`/api/search?q=${bookTitle}`)
            .then((res) => res.json())
            .then((res) => {
                return setSearchResults(res.docs);
            });
    }

    function addToShelf(olID) {
        fetch(`/api/books`, {
            method: "POST",
            body: JSON.stringify({
                olID: olID,
            }),
        }).then((res) => {
            // TODO: Replace the lines below
            console.log(res.status);
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
                <form onSubmit={onSubmit} className="border rounded shadow-sm w-fit">
                    <input
                        className="p-2 w-64"
                        name="bookName"
                        type="text"
                        placeholder="Book Title"
                        required
                    />
                    <input className="px-2 w-fit" type="submit" />
                </form>


                <BookList books={searchResults} addToShelf={addToShelf} />
            </main>
        </div>
    );
}
