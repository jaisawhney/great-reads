import prisma from '../../../lib/prisma';

const sampleBook = {title: 'Catching Fire', key: '203943422'}

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
