import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import NewShelfForm from "./NewShelfForm";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ShelvesTab(props) {
  const [shelves, setShelves] = useState([]);
  let [isOpen, setIsOpen] = useState(true);

  // Get the existing shelves
  async function getShelves() {
    const shelves = await fetch(`/api/users/${props.user.sub}/booklists`).then((res) => res.json());
    setShelves(shelves);
  }

  useEffect(() => {
    getShelves();
  }, []);

  return (
    <div>
      <NewShelfForm props={props.user} />
      {shelves.map((shelf) => (
        <ShelfListItem shelf={shelf} key={shelf.id} />
      ))}
    </div>
  );
}
