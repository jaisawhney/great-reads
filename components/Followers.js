import { useState, useEffect } from "react";
export default function Followers(props) {
  //Just a page that list everyone we follow

  //Generating current page as well as all page options
  const [page, setPage] = useState(1);
  const [pageResults, setPageResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //Results page page
  const resultsPerPage = 5;
  useEffect(() => {
    setPageCount(Math.ceil(props.followers.length / resultsPerPage));
    setPage(1);
  }, [props.followers]);

  //Set page results
  useEffect(() => {
    if (props.followers.length > 0) {
      //Manually creating a subset
      var newPageResults = [];
      for (var i = 0; i < props.followers.length; i++) {
        if (i >= page * resultsPerPage - resultsPerPage && i < page * resultsPerPage) {
          newPageResults.push(props.followers[i]);
        }
      }

      setPageResults(newPageResults);
    }
  }, [page, props.followers]);
  return (
    <>
      {pageResults.map((user) => (
        <div className="p-2 border-b-2 border-slate-600">
          <a href={user.id}>{user.username}</a>
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
