import prisma from '../../../lib/prisma';

const sampleBook = {title: 'Catching Fire', description: 'A short description', isbn: '0439023491', author: 'Suzanne Collins'}

export default async function handler(req, res) {
  if (req.method=='GET'){
    const allBooks = await prisma.book.findMany();  // TODO: Add pagination

    res.status(200).json(allBooks)
  } else {
    const newBook = await prisma.book.create({
      data: sampleBook,
    });

    res.status(200).json(newBook)
  }
}
