import classNames from "classnames";
import { useEffect, useState } from "react";

export default function NewShelfForm(props) {
  const [shelves, setShelves] = useState([]);

  // Get the existing shelves
  async function getShelves() {
    // const shelves = await fetch(`/api/users/${props.user.sub}/booklists`).then((res) => res.json());
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
    <div className="">
      <form onSubmit={createShelf} className={classNames("flex flex-col")}>
        <input
          className="w-full px-2 py-1"
          name="shelfTitle"
          type="text"
          placeholder="Shelf Title"
          required
        />
        <input
          className="w-full px-2 py-1 border"
          name="shelfDescription"
          type="text"
          placeholder="Book Description"
          required
        />
        <button className={classNames("mx-1")} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
