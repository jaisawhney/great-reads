import classNames from "classnames";

export default function CurrentlyReading() {
  return (
    <div className={classNames("bg-gray-400 p-4 w-fit text-black")}>
      <h1>Currently Reading:</h1>
      <h1>Book Title</h1>
    </div>
  );
}
