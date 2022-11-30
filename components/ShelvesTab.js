import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import NewShelfForm from "./NewShelfForm";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import PlusIcon from "./icons/PlusIcon";

export default function ShelvesTab(props) {
  const [shelves, setShelves] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // Get the existing shelves
  async function getShelves() {
    const shelves = await fetch(`/api/users/${props.user.sub}/booklists`).then((res) => res.json());
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
    </div>
  );
}
