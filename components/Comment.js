import classNames from "classnames";

export default function Comment(props) {
  const createdOn = new Date(props.comment.createdAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className={classNames("p-3")}>
      {/* Comment */}
      <div>
        <p className={classNames("text-sm")}>{createdOn}</p>
      </div>
      <div className={classNames()}>
        <p className={classNames("text-sm text-white/80")}>{props.comment.message}</p>
        <button type="button" className={classNames("text-sm text-white/80 border px-2 my-1.5")}>
          Reply
        </button>
      </div>

      {/* Replies */}
      <div>
        {props.comment.replies?.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </div>
    </div>
  );
}
