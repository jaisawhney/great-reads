import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const bookId = parseInt(req.query.bookId);

  if (req.method === "GET") {
    // Prisma doesn't support trees. The below will include up to two nested comments
    const book = await prisma.book.findUnique({
      where: { id: bookId },
      include: {
        comments: {
          where: {
            parent: null,
          },
          include: {
            parent: { include: { parent: true, replies: true } },
            replies: { include: { parent: true, replies: true } },
          },
        },
      },
    });

    res.status(200).json(book);
  } else {
    const deletedBook = await prisma.book.delete({
      where: { id: bookId },
    });

    res.status(200).json(deletedBook);
  }
}
