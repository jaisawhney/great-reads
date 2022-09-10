// Nextjs.org/docs/api-routes/response-helpers
import * as models from '../../../db/models';
// const Book = require('../../../db/models/book');

export default async function handler(req, res) {
  if (req.method='GET'){
    console.log('Book Model:', models)

    // TODO: Add pagination
    const allBooks = models.Book.findAll();

    res.status(200).json('Books here:', allBooks)
  } else {

  }
}
