import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import NewShelfForm from "./NewShelfForm";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import PlusIcon from "./icons/PlusIcon";
import { useRouter } from "next/router";

export default function ShelvesTab(props) {
  const router = useRouter();
  const profileUser = router.query.userId;
  const [shelves, setShelves] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // Get the existing shelves
  async function getShelves() {
    const shelves = await fetch(`/api/users/${profileUser}/booklists`).then((res) => res.json());
    setShelves(shelves);
  }

  useEffect(() => {
    getShelves();
  }, []);

  return (
    <div className="flex flex-col items-end">
      <button
        className="flex flex-row mx-4 mb-2 hover:bg-neutral-600/40 p-1 rounded-full transition-colors ease-in duration-100"
        onClick={() => setIsActive(true)}>
        <PlusIcon />
      </button>

      {isActive && <NewShelfForm user={props.user} onClose={() => setIsActive(false)} />}
      <div className="w-full">
        {shelves.map((shelf) => (
          <ShelfListItem shelf={shelf} key={shelf.id} />
        ))}
      </div>
  return (
    <div>
      {props.user.internalId === +profileUser && (
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
            className="w-full px-2 py-1 border"
            name="shelfDescription"
            type="text"
            placeholder="Shelf Description"
            required
          />
          <button className={classNames("mx-1")} type="submit">
            Submit
          </button>
        </form>
      )}
      {shelves.map((shelf) => (
        <ShelfListItem shelf={shelf} key={shelf.id} />
      ))}
    </div>
  );
}
