import BookResult from "./BookResult";
import SearchResult from "./SearchResult";
export default function BookList(props) {
  // breaks search results from api into individual books
  // displays as many search results
  return props.books
    .filter(({ title, author_name }) => title && author_name)
    .map((bookObj, i) => {
      return (
        <SearchResult
          book={bookObj}
          shelves={props.shelves}
          addToShelf={props.addToShelf}
          key={i}
        />
      );
    });
}
