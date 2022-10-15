import classNames from "classnames";
import { useState } from "react";
import CommentReplyForm from "./CommentReplyForm";

export default function Comment(props) {
  const [isReplying, setReply] = useState(false);

  const createdOn = new Date(props.comment.createdAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  function toggleReplyForm() {
    if (isReplying) return setReply(false);
    setReply(true);
  }

  return (
    <div className={classNames("p-3")}>
      {/* Comment */}
      <div>
        <p className={classNames("text-sm")}>{createdOn}</p>
      </div>
      <div className={classNames()}>
        <p className={classNames("text-white")}>{props.comment.message}</p>
        <button type="button" className={classNames("button")} onClick={toggleReplyForm}>
          Reply
        </button>
        {isReplying && <CommentReplyForm comment={props.comment} />}
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
