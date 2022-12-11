import classNames from "classnames";
import SubmitComment from "./icons/SubmitComment";

export default function CommentReplyForm(props) {
  function createReply(e) {
    e.preventDefault();
    const comment = e.target.elements.comment?.value;
    if (!comment) return;

    fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        bookId: props.comment.bookId,
        parentId: props.comment.id,
        comment: comment,
      }),
    }).then(async (res) => {
      if (!res.ok) console.log("Problem");
      await props.refreshBook();
    });
    e.target.reset();
  }

  return (
    <form
      onSubmit={createReply}
      className={classNames(
        "border rounded shadow-sm bg-white text-black flex w-fit flex-row justify-between"
      )}>
      <input
        className={classNames("px-2 text-sm")}
        name="comment"
        type="text"
        placeholder="Your reply..."
        required
      />
      <button className={classNames("button")} type="submit">
        <SubmitComment className={classNames("h-50")} />
      </button>
    </form>
  );
}
