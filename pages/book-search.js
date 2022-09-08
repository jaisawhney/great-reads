import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function BookSearch() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Book Search</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <form className="border">
                    <input className="p-2" name="bookName" type="text" placeholder="Book title" required/>
                    <input className="px-2" type="submit"/>
                </form>
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                    <div className="row-auto flex flex-row items-center shadow-md rounded">
                        <img src="https://via.placeholder.com/150x200.png?text=Book+Cover"
                             alt="Book thumbnail"
                             className="fill-current w-full rounded-t h-auto md:rounded-l md:w-auto"/>
                        <div className="flex flex-col justify-between leading-normal p-3">
                            <p className="font-bold text-md md:text-xl">Placeholder Title</p>
                            <p className="text-base text-gray-700">Placeholder Author</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
