import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";

export default function ShelvesTab(props) {
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
      props.setShelves([...props.shelves, createdShelf]);
    });
    e.target.reset();
  }

  /* Temporary form, limited styling */
  return (
    <div>
      <form
        onSubmit={createShelf}
        className={classNames(
          "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between"
        )}>
        <input
          className="w-full px-2 py-1"
          name="shelfTitle"
          type="text"
          placeholder="Shelf Title"
          required
        />
        <input
          className="w-full px-2 py-1"
          name="shelfDescription"
          type="text"
          placeholder="Book Description"
          required
        />
        <button className={classNames("mx-1")} type="submit">
          Submit
        </button>
      </form>
      {props.shelves.map((shelf) => (
        <ShelfListItem shelf={shelf} key={shelf.id} />
      ))}
    </div>
  );
}
