import prisma from '../../../lib/prisma';

const sampleBookId = 2;
const sampleUserId = 2;

export default async function handler(req, res) {
  if (req.method=='GET'){
    const allReviews = await prisma.review.findMany(); // TODO: Add pagination

    res.status(200).json(allReviews)
  } else {
    const newReview = await prisma.review.create({
      data: {
        title: 'A piece of art',
        content: 'A short description',
        rating: 1,
        user: {
          connect: {
            id: sampleUserId
          }
        },
        book: {
          connect: {
            id: sampleBookId
          }
        }
      },
    });

    res.status(200).json(newReview)
  }
}
