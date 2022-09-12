// Nextjs.org/docs/api-routes/response-helpers
import prisma from '../../../lib/prisma';

const red_book = {'title': 'Red Book', 'description': 'some desc', 'isbn': 'lmfsdf', 'author': 'klsndflksdf'}

export default async function handler(req, res) {
  if (req.method=='GET'){

    // TODO: Add pagination
    const allBooks = await prisma.book.findMany();

    res.status(200).json(allBooks)
  } else {
    console.log('post')
    const r = req.body;

    const book = await prisma.book.create({
      data: {
        title: red_book['title'],
        isbn: red_book['isbn'],
        description: red_book['description'],
        author: red_book['author'],
      },
    });

    res.status(200).json(book)
  }
}
