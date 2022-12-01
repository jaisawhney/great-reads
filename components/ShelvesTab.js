import ShelfListItem from "./ShelfListItem";
import { useEffect, useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import { useRouter } from "next/router";

export default function ShelvesTab(props) {
  const router = useRouter();
  const profileUser = router.query.userId;
  const [shelves, setShelves] = useState([]);

  // Get the existing shelves
  async function getShelves() {
    const shelves = await fetch(`/api/users/${profileUser}/booklists`).then((res) => res.json());
    setShelves(shelves);
  }

  useEffect(() => {
    getShelves();
  }, []);

  return (
    <div>
      {props.user.internalId === +profileUser && (
        <button
          className="flex flex-row mx-4 mb-2 hover:bg-neutral-600/40 p-1 rounded-full transition-colors ease-in duration-100"
          onClick={() => setIsActive(true)}>
          <PlusIcon />
        </button>
      )}
      {isActive && (
        <NewShelfForm
          user={props.user}
          closeModal={() => setIsActive(false)}
          shelves={shelves}
          setShelves={setShelves}
        />
      )}

      <div className="w-full">
        {shelves.map((shelf) => (
          <ShelfListItem shelf={shelf} key={shelf.id} />
        ))}
      </div>
    </div>
  );
}
