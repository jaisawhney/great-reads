import prisma from "../../../../../lib/prisma";

export default async function handler(req, res) {
  const userId = req.query.userId;

  if (req.method === "GET") {
    // Get the books from the user's shelves, ignoring duplicates
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

    // Flatten the array and calculate the average rating
    const userBooks = booksListBooks
      .flatMap((bookList) => bookList.book)
      .map((book) => {
        const reviews = book.reviews;
        const average = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

        book.rating = { count: reviews.length, average: average };
        return book;
      });

    res.status(200).json(userBooks);
  }
}
