import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const bookId = parseInt(req.query.bookId)

  if (req.method=='GET'){
    const book = await prisma.book.findUnique({
      'where': {id: bookId}
    });

    res.status(200).json(book);
  } else {
    const deletedBook = await prisma.book.delete({
      'where': {id: bookId}
    });

    res.status(200).json(deletedBook);
  }
}
