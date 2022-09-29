import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import Link from "next/link";
import { useState } from "react";

export default function ShelfList(props) {
  // const [tab, setTab] = useState("shelves");
  const navTextStyle = "text-sm w-fit text-white rounded-t-sm py-2";
  const tabStyle = "flex flex-col w-full border-t-2 divider hidden";

  // function openTab(tabName) {
  //   setTab()
  // }

  return (
    <div className={classNames("flex flex-col items-start w-full rounded-sm","md:max-w-[500px]")}>

      {/* NAV */}
      <div className={classNames("flex flex-row space-x-10 px-4 w-full rounded-t-sm justify-center","md:justify-evenly")}>
        <p className={navTextStyle}>Feed</p>
        <p className={navTextStyle}>Shelves</p>
        <p className={navTextStyle}>Reviews</p>
        <p className={navTextStyle}>About</p>
      </div>

      {/* feed */}
      <ul className={classNames("flex flex-col w-full border-t-2 divider hidden","")} id="feed">
        <p>lissa read a book</p>
        <p>lissa hated a book</p>
        <p>lissa reviewed a book</p>
      </ul>

      {/* shelf list */}
      <ul className={classNames("flex flex-col w-full border-t-2 divider","")} id="shelves">

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