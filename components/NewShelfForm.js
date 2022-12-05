import classNames from "classnames";
import CloseIcon from "./icons/CloseIcon";

export default function NewShelfForm({ closeModal, shelves, setShelves }) {
  const inputStyles = "px-2 py-1 rounded mt-9 text-neutral-900 mx-6";

  function createShelf(e) {
    e.preventDefault();
    const title = e.target.elements.shelfTitle?.value;
    const description = e.target.elements.shelfDescription?.value;
    if (!title || !description) return;

    // Close the modal
    closeModal();

    // Create the shelf
    fetch(`/api/booklists`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    }).then(async (res) => {
      const createdShelf = await res.json();
      if (!res.ok) return alert("There was a problem while creating the book");

      // Update the state
      setShelves([...shelves, createdShelf]);
    });
  }

  return (
    <div
      onClick={closeModal}
      className="z-0 bg-black/70 backdrop-blur-sm fixed w-full h-full top-0 left-0 flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-neutral-700 rounded-2xl relative w-full max-w-[500px] mx-5">
        <button
          onClick={closeModal}
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
          <textarea
            className={inputStyles}
            name="shelfDescription"
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
