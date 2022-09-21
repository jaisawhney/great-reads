import prisma from "../../../lib/prisma";

const bookListId = 1; // Sample book list ID

export default async function handler(req, res) {
    if (req.method === "GET") {
        const allBooks = await prisma.book.findMany(); // TODO: Add pagination

        res.status(200).json(allBooks);
    } else {
        // The /search route provides more information than the /works route
        const result = await fetch(
            `http://openlibrary.org/search.json?q=key:${JSON.parse(req.body).olID}&limit=1`
        );
        const bookObj = (await result.json())?.docs[0];

        // Check if the book already exists in the shelf
        const existingBook = await prisma.BookListBook.findFirst({
            where: {
                bookListId: bookListId,
                OLID: bookObj.key,
            },
        });

        // Book exists (200)
        if (existingBook) return res.status(200).end();

        // Add the book to the shelf and create a book if needed
        await prisma.BookListBook.create({
            data: {
                bookList: {
                    connect: {
                        id: bookListId,
                    },
                },
                book: {
                    connectOrCreate: {
                        where: {
                            OLID: bookObj.key,
                        },
                        create: {
                            OLID: bookObj.key,
                            title: bookObj.title,
                            pageCount: bookObj.number_of_pages_median.toString(),
                            publishedDate: bookObj.first_publish_year.toString(),
                        },
                    },
                },
            },
        });

        // Book added (201)
        return res.status(201).end();
    }
}
