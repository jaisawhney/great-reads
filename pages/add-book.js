import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState} from "react";

export default function AddBook() {
    const [searchResults, setSearchResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        const bookTitle = e.target.elements.bookName?.value;
        if(!bookTitle) return;

        fetch(`http://openlibrary.org/search.json?q=${bookTitle}&fields=title,author_name,cover_i&limit=15&page=1`)
            .then(res => res.json())
            .then(res => {
                return setSearchResults(res.docs);
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
                    {searchResults.length > 0 &&
                    searchResults
                        .filter(({title, author_name}) => title && author_name)
                        .map((result, i) => {
                            const {title, author_name, cover_i} = result;
                            const cover = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

                            return (
                                <div className="row-auto flex flex-row items-center shadow-md rounded" key={i}>
                                    <img src={cover}
                                         alt="Book thumbnail"
                                         className="fill-current w-auto rounded-t h-auto"/>
                                    <div className="flex flex-col justify-between leading-normal p-3">
                                        <p className="font-bold text-md md:text-xl">{title}</p>
                                        <p className="text-base text-gray-700">{author_name.join(", ")}</p>
                                        <a className="no-underline hover:underline" href="#">Add to Shelf</a>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </main>
        </div>
    );
}
