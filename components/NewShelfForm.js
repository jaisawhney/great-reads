import classNames from "classnames";
import { useEffect, useState } from "react";
import CloseIcon from "./icons/CloseIcon";

export default function NewShelfForm({ user, onClose }) {
  const [shelves, setShelves] = useState([]);

  const inputStyles = "px-2 py-1 rounded mt-5 mx-9 text-neutral-900";

  // Get the existing shelves
  async function getShelves() {
    // const shelves = await fetch(`/api/users/${user.sub}/booklists`).then((res) => res.json());
    setShelves(shelves);
  }

  useEffect(() => {
    getShelves();
  }, []);

  function createShelf(e) {
    e.preventDefault();
    const title = e.target.elements.shelfTitle?.value;
    const description = e.target.elements.shelfDescription?.value;
    if (!title || !description) return;

    fetch(`/api/booklists`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    }).then(async (res) => {
      const createdShelf = await res.json();
      /*TODO: Do something*/
      if (!res.ok) return alert("bad");

      // Update the state
      setShelves([...shelves, createdShelf]);
    });
    e.target.reset();
  }

  return (
    <div className="bg-black/70 backdrop-blur-sm fixed w-full h-full top-0 left-0 flex justify-center items-center">
      <div className="absolute bg-neutral-700 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 transition-colors ease-in duration-100 text-neutral-50 hover:text-neutral-500">
          <CloseIcon />
        </button>
        <form onSubmit={createShelf} className={classNames("flex flex-col")}>
          <legend className="text-lg text-center pt-4 pb-2 border-b border-neutral-50/30">
            New Shelf
          </legend>
          <input
            className={inputStyles}
            name="shelfTitle"
            type="text"
            placeholder="Title"
            required
          />
          <input
            className={inputStyles}
            name="shelfDescription"
            type="text"
            placeholder="Description"
            required
          />
          <button
            className={classNames(
              "w-full bg-teal-500/40 hover:bg-teal-600/40 rounded-b-2xl py-3 mt-9 transition-colors ease-in duration-100"
            )}
            type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
