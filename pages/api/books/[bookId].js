import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const bookId = parseInt(req.query.bookId);

  if (req.method === "GET") {
    const book = await prisma.book.findUnique({
      where: { id: bookId },
      include: {
        comments: true,
      },
    });

    // Create comment tree
    const roots = [];
    const commentMap = {};

    for (let i = 0; i < book.comments.length; i += 1) {
      const comment = book.comments[i];
      comment.replies = [];
      commentMap[comment.id] = i;
    }

    for (let i = 0; i < book.comments.length; i += 1) {
      let comment = book.comments[i];
      if (!comment.parentId) {
        roots.push(comment);
        continue;
      }

      const parent = book.comments[commentMap[comment.parentId]];
      parent.replies = [...parent.replies, comment];
    }

    book.comments = roots;
    res.status(200).json(book);
  } else {
    const deletedBook = await prisma.book.delete({
      where: { id: bookId },
    });

    res.status(200).json(deletedBook);
  }
}
