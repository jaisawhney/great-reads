import classNames from "classnames";
import BannerCloseIcon from "./icons/BannerCloseIcon";

export default function NotificationBar(props) {
  function hideBanner() {
    props.setVisibility(false);
  }

  return (
    <div
      className={classNames(props.visibility ? "" : "hidden", "bg-teal-800 w-100 mx-auto p-2", "")}>
      <div className={classNames("flex items-center justify-between")}>
        <div className={classNames("flex flex-shrink-0")}>
          <p>{props.message}</p>
        </div>
        <div className={classNames("flex-shrink-0")}>
          <button
            type="button"
            className={classNames("flex rounded p-0.5 hover:bg-teal-700")}
            onClick={hideBanner}>
            <BannerCloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
