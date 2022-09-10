// Nextjs.org/docs/api-routes/response-helpers
const Book = require("../../db/models/book");

export default function handler(req, res) {
  res.status(200).json({ title: '10 Cloverlane' })
}
