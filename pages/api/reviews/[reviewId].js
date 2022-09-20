import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const reviewId = parseInt(req.query.bookId)

  if (req.method=='GET'){
    const review = await prisma.reviews.findUnique({
      'where': {id: reviewId}
    });

    res.status(200).json(review);
  } else {
    const deletedReview = await prisma.book.delete({
      'where': {id: reviewId}
    });

    res.status(200).json(deletedReview);
  }
}
