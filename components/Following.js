import { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

export default function Following(props) {
  const router = useRouter();

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
      const subset = props.following.slice(
        page * resultsPerPage - resultsPerPage,
        page * resultsPerPage
      );

      setPageResults(subset);
    }
  }, [page, props.following]);

  function searchSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    router.push(`/user-list?search=${username}`);
  }

  return (
    <div>
      {props.user.internalId === props.currentUser.id && (
        <form
          onSubmit={searchSubmit}
          className={classNames(
            "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between"
          )}>
          <input
            className="w-full px-2 py-1"
            name="username"
            type="text"
            placeholder="Search for a friend"
            required
          />
          <button className={classNames("mx-1")} type="submit">
            Submit
          </button>
        </form>
      )}

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
    </div>
  );
}
