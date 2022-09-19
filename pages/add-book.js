import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState} from "react";
import BookList from "../components/BookList";

export default function AddBook() {
    const [searchResults, setSearchResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        const bookTitle = e.target.elements.bookName?.value;
        if(!bookTitle) return;

        fetch(`/api/search?q=${bookTitle}`)
            .then(res => res.json())
            .then(res => {
                return setSearchResults(res.docs);
            });
    }

    function addToShelf(olID) {
      fetch(`/api/books`, {
        method:"POST",
        body: JSON.stringify({
          olID: olID
        })
      })
        .then(res => res.json())
        .then(res => {
          //console.log(res);
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Book Search</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <form onSubmit={onSubmit} className="border rounded shadow-sm">
                    <input className="p-2" name="bookName" type="text" placeholder="Book title" required/>
                    <input className="px-2" type="submit"/>
                </form>
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                  <BookList books={searchResults} addToShelf={addToShelf} />
                </div>
            </main>
        </div>
    );
}
