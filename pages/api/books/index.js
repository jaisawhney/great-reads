import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const allBooks = await prisma.book.findMany();  // TODO: Add pagination

    res.status(200).json(allBooks);
  } else {
    // The /search route provides more information than the /works route
    const result = await fetch(`http://openlibrary.org/search.json?q=key:${JSON.parse(req.body).olID}&limit=1`);
    const bookObj = (await result.json())?.docs[0];
    const bookListBook = await prisma.BookListBook.create({
      data: {
        bookList: {
          connect: {
            id: 1 //sample id
          }
        },
        book: {
          connectOrCreate: {
            where: {
              OLID: bookObj.key
            },
            create: {
              OLID: bookObj.key,
              title: bookObj.title,
              pageCount: bookObj.number_of_pages_median.toString(),
              publishedDate: bookObj.first_publish_year.toString()
            }
          }
        }
      },
      include: { book: true }
    });

    res.status(201).json(bookListBook.book || {});
  }
}
