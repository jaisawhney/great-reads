export default async function handler(req, res) {
    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        const result = await fetch(`http://openlibrary.org/search.json?q=${req.query.q}&fields=title,author_name,cover_i&limit=9&page=1`);
        const unparsedJson = await result.text();
        res.end(unparsedJson);
    } catch (err) {
        res.json(err);
        res.status(500);
        res.end();
    }
}
