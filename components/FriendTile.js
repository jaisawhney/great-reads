import classNames from "classnames";
import TinyBook from "./TinyBook";

export default function FriendTile(props) {

  // sample user, will be passed through props, more info needed
  // then relevant books each passed to TinyBook, pasted 3 times as example here
  let user = {
    username: "Lissa",
    profilePic: "/images/sample-prof-pic.jpg",
  };

  return (
    <div className={classNames("bg-gradient-to-b from-slate-300/20 to-zinc-900 text-white rounded mx-2 p-3 flex flex-col space-y-4", "md:h-[300px] md:w-[400px] md:my-4")}>

      {/* profile info row*/}
      <div className="flex flex-row items-end space-x-2 px-2">
        <img className="w-12 rounded-sm shadow-lg" src={user["profilePic"]} />
        <h1 className="mb-1">{user["username"]}</h1>
      </div>

      {/* relevant books row */}
      <div className={classNames("flex flex-col space-y-3 justify-evenly pt-4 border-t-2 mr-auto border-zinc-200/40 w-full px-2", "md:flex-row md:items-end md:space-x-5 md:space-y-0")}>
      <TinyBook label="Currently Reading" />
      <TinyBook label="Recently Reviewed" />
      <TinyBook label="Latest Recommended" />
      </div>
    </div>
  );
}
