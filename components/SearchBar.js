import classNames from "classnames";
import SearchIcon from "../public/icons/SearchIcon";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  // Redirect to the search page on submit
  function searchSubmit(e) {
    e.preventDefault();
    const bookName = e.target.elements.bookName.value;
    router.push(`/add-book?title=${bookName}`);
  }

  return (
    <form
      onSubmit={searchSubmit}
      className={classNames(
        "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between",
        "md:mb-6 md:w-[300px]"
      )}>
      <input
        className={classNames("w-full px-2 py-1")}
        name="bookName"
        type="text"
        placeholder="Book Title"
        required
      />
      <button className={classNames("mx-1")} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
