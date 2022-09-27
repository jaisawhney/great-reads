import BookResult from "./BookResult";
export default function BookList(props) {

  // breaks search results from api into individual books
  // displays as many search results
  return (
    props.books
      .filter(({ title, author_name }) => title && author_name)
      .map((bookObj, i) => {
        return (
          <BookResult book={bookObj} key={i} />
        );
      })
  );
}