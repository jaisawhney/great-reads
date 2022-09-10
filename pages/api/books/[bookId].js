import Book from '../../../db/models/book';

export default async function handler(req, res) {
  if (req.method='GET'){
    const { bid } = req.query

    const book = await Book.findByPk(bid);

    res.status(200).json(book)
  } else {
    // Update or Delete
  }
}
