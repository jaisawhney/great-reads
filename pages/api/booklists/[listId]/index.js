import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  const listId = parseInt(req.query.listId);

  if (req.method === "GET") {
    const bookList = await prisma.BookList.findUnique({
      where: {
        id: listId,
      },
    });

    res.status(200).json(bookList);
  } else {
    // TODO: Create /listId/update route: allows user to remove a book from booklist
    const deletedList = await prisma.BookList.delete({
      where: {
        id: listId,
      },
    });
    res.status(200).json(deletedList);
  }
}
