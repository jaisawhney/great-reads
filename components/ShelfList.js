import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import Link from "next/link";

export default function ShelfList(props) {
  return (
    <div className={classNames("flex flex-col items-start w-full rounded-sm","md:max-w-[500px]")}>
      <h2 className={classNames("text-sm w-fit text-white bg-emerald-900 rounded-t-sm px-6 py-2 ","")}>Shelves</h2>

      {/* shelf list */}
      <ul className={classNames("flex flex-col w-full border-t-2 divider","")}>

        {/* example shelf */}
        {/* will need to be mapped, passed props and such */}
        <ShelfListItem />
        <ShelfListItem />
        <ShelfListItem />
        <ShelfListItem />
        <ShelfListItem />


      </ul>

  </div>
  )
}