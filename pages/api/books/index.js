import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const allBooks = await prisma.book.findMany(); // TODO: Add pagination

    res.status(200).json(allBooks);
  } else {
    const body = JSON.parse(req.body);

    // The /search route provides more information than the /works route
    const result = await fetch(`http://openlibrary.org/search.json?q=key:${body.olID}&limit=1`);
    const bookObj = (await result.json())?.docs[0];

    // Check if the book already exists in the shelf
    const existingBook = await prisma.BookListBook.findFirst({
      where: {
        bookListId: body.shelfID,
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
            id: body.shelfID,
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
              author: bookObj.author_name.join(", "),
              coverId: bookObj.cover_i.toString(),
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
