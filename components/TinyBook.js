import classNames from "classnames";
import Link from "next/link";

export default function TinyBook(props) {
  // will need to be passed book through props
  const book = {
    title: "The Book",
    author: "Person Man",
    img: "/images/sample-cover.jpeg",
  };

  const label = props.label;

  // ugly
  // return (
  //   <div className="flex flex-col space-y-2 text-left">
  //   <p className="text-xs w-24">{props.label}</p>
  // //   <div className={classNames("flex flex-col items-left space-y-1")}>
  // //     <img className="w-14" src={book["img"]} />
  // //     <div className="flex flex-col items-left">
  // //       <h3>{book["title"]}</h3>
  // //       <h4 className="text-xs text-white/70">{book["author"]}</h4>
  // //     </div>
  // //   </div>
  // </div>
  // );

  // less ugly but jiggly
  return (
    // dynamic link to book info page, based on id or whatever
    <Link href="">
      <div
        className={classNames(
          "flex flex-row h-full items-start text-right space-x-4 group",
          "md:flex-col-reverse md:items-start md:space-x-0 hover:bg-zinc-900 hover:p-3"
        )}
      >
        
        <div className={classNames("flex flex-col items-left space-y-1")}>

        {/* cover */}
          <img
            className={classNames(
              "w-14",
              "md:w-20 group-hover:w-24 transition-all"
            )}
            src={book["img"]}
          />

          {/* book info DESKTOP */}
          <div
            className={classNames("hidden text-center", "md:group-hover:block")}
          >
            <h3>{book["title"]}</h3>
            <p className="text-xs text-white/70">{book["author"]}</p>
          </div>
        </div>

        {/* book label */}
        <div className={classNames("space-y-1")}>
          <p
            className={classNames(
              "text-xs text-white/60",
              "md:mb-1 md:w-24 md:text-left group-hover:text-white/90 group-hover:mb-2 group-hover:hidden transition-all"
            )}
          >
            {label}
          </p>

          {/* book info MOBILE */}
          <div className={classNames("flex flex-col items-start", "md:hidden")}>
            <h3>{book["title"]}</h3>
            <p className="text-xs text-white/70">{book["author"]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
