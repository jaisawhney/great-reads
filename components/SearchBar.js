import classNames from "classnames";

export default function SearchBar() {
  return (
    <form
      onSubmit={searchSubmit}
      className={classNames(
        "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between px-2 py-1",
        "md:mb-6"
      )}>
      <input className="" name="bookName" type="text" placeholder="Book Title" required />
      <button className={classNames("")} type="submit">
        <Search />
      </button>
      {/* <input className="px-2 w-fit" type="submit" /> */}
    </form>
  );
}
