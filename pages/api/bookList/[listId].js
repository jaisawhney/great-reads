import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method=='GET'){
    console.log(req.query);
    const { bookId } = req.query

    const book = await prisma.book.findUnique({
      'where': {
        id: parseInt(bookId)
      }
    });

    res.status(200).json(book)
  } else {
    // Update or Delete
  }
}
