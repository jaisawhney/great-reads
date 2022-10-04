import classNames from "classnames";

export default function Footer() {
  return (
    <div
      className={classNames(
        "w-full relative bottom-0 bg-black/60 px-4 py-6 flex justify-center text-gray-400"
      )}>
      <p className="hidden">text</p>
    </div>
  );
}
