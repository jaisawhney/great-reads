// Nextjs.org/docs/api-routes/response-helpers
import prisma from '../../../lib/prisma';

const review = {title: 'A piece of art', content: 'A short description', rating: 1}

export default async function handler(req, res) {
  if (req.method=='GET'){

    // TODO: Add pagination
    const allReviews = await prisma.reviews.findMany();

    res.status(200).json(allReviews)
  } else {
    const book = await prisma.book.create({
      data: review,
    });

    res.status(200).json(book)
  }
}
