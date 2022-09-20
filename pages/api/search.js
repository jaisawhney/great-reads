export default async function handler(req, res) {
    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        const result = await fetch(`http://openlibrary.org/search.json?q=${req.query.q}&limit=9&fields=key,title,author_name,cover_i,number_of_pages_median,first_publish_year&page=1`);
        const unparsedJson = await result.text();
        res.end(unparsedJson);
    } catch (err) {
        res.json(err);
        res.status(500);
        res.end();
    }
}
