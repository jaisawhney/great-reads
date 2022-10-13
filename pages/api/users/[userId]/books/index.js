import prisma from "../../../../../lib/prisma";

export default async function handler(req, res) {
  const userId = req.query.userId;

  if (req.method === "GET") {
    // Get the books from the user's shelves and filter out any duplicates
    const booksListBooks = await prisma.BookListBook.findMany({
      distinct: ["OLID"],
      where: {
        bookList: {
          User: {
            auth0Id: userId,
          },
        },
      },
      select: {
        book: {
          include: {
            reviews: true,
          },
        },
      },
    });

    // Flatten array
    const userBooks = booksListBooks.flatMap((bookList) => bookList.book);

    res.status(200).json(userBooks);
  }
}
