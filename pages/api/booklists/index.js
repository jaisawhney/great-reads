import prisma from '../../../lib/prisma';

const sampleBookId = 2;
const sampleUserId = 2;

export default async function handler(req, res) {
  if (req.method=='GET'){
    const allLists = await prisma.BookList.findMany();

    res.status(200).json(allLists)
  } else {
    const newBookList = await prisma.BookList.create({
      data: {
        title: 'Good books to read for summer 2023',
        description: 'Book list description',
        user: {
          connect: {
            id: sampleUserId
          }
        },
        book: {
          connect: {
            id: sampleBookId
          }
        },
      },
    });
    res.status(200).json(newBookList)
  }
}
