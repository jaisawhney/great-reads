import { useState, useEffect } from "react";
export default function Following(props) {
  //Just a list of all users that this user is following
  const [page, setPage] = useState(1);
  const [pageResults, setPageResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //Results page page
  const resultsPerPage = 5;
  useEffect(() => {
    setPageCount(Math.ceil(props.following.length / resultsPerPage));
    setPage(1);
  }, [props.following]);

  //Set page results
  useEffect(() => {
    if (props.following.length > 0) {
      //Manually creating a subset
      var newPageResults = [];
      for (var i = 0; i < props.following.length; i++) {
        if (i >= page * resultsPerPage - resultsPerPage && i < page * resultsPerPage) {
          newPageResults.push(props.following[i]);
        }
      }

      setPageResults(newPageResults);
    }
  }, [page, props.following]);
  return (
    <>
      {pageResults.map((user) => (
        <div className="p-2 border-b-2 border-slate-600">
          <a href={user.id}>{user.email}</a>
        </div>
      ))}
      <div className="flex flex-row space-x-3 mb-5 mt-7">
        {[...Array(pageCount)].map((option, index) => (
          <p
            className={page === index + 1 ? "underline" : null}
            key={index}
            onClick={() => setPage(index + 1)}>
            {index + 1}
          </p>
        ))}
      </div>
    </>
  );
}
