import classNames from "classnames";
import SearchIcon from "../components/icons/SearchIcon";
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
        "border rounded shadow-sm bg-neutral-100 text-neutral-900 flex w-full flex-row justify-between",
        "md:w-[300px]"
      )}>
      <input
        className={classNames("w-full px-1 py-0.5")}
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
