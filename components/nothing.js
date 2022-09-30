import classNames from "classnames";
import ShelfListItem from "./ShelfListItem";
import Link from "next/link";
import { useState, useRef } from "react";

// LISSA EXPERIMENTING WITH TAB NAVGIATION

export default function ProfileTabs(props) {
  const [tab, setTab] = useState(getWaterTab);

  const navTextStyle = "text-sm w-fit text-white rounded-t-sm py-2";
  const tabStyle = "flex flex-col w-full border-t-2 divider hidden";

  function getJuiceTab() {
    console.log("JUICE")
    return (
      <div className={classNames("p-5 bg-green","")} id="juiceTab">
        <p>yummy juice!!</p>
      </div>
    );
  }

  function getWaterTab() {
    console.log("WATER")
    return (
      <div className={classNames("p-5 bg-green","")} id="waterTab">
        <p>yummy WATER!!</p>
      </div>
    );
  }

  return (
    <div className={classNames("flex flex-col items-start w-full rounded-sm","md:max-w-[500px]")}>

      {/* NAV */}
      <div className={classNames("flex flex-row space-x-10 px-4 w-full bg-black rounded-t-sm justify-center","")}>
        <p className={navTextStyle} onClick={() => setTab(getWaterTab)}>water</p>
        <p className={navTextStyle} onClick={() => setTab(getJuiceTab)}>juice</p>
      </div>

    {tab}


  </div>
  )
}