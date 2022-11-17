import classNames from "classnames";

export default function NotificationBar(props) {
  return (
    <div className={classNames(props.isVisible ? "" : "hidden")}>
      <p>{props.message}</p>
    </div>
  );
}
