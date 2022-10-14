import prisma from "../../../../../lib/prisma";

//TODO: Protect resource
export default async function async(req, res) {
  const shelfID = req.query.listId;

  if (req.method === "GET") {
    // Get the books, ignoring duplicates
    const booksListBooks = await prisma.BookListBook.findMany({
      distinct: ["OLID"],
      where: {
        bookListId: parseInt(shelfID),
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
