import classNames from "classnames";
import SubmitComment from "./icons/SubmitComment.js";

export default function CommentForm(props) {
  function createComment(e) {
    e.preventDefault();
    console.log(e.target.elements);
    const comment = e.target.elements?.comment?.value;
    if (!comment) return;

    fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        bookId: props.book.id,
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
      onSubmit={createComment}
      className={classNames(
        "border rounded shadow-sm bg-white text-black flex w-full flex-row justify-between"
      )}>
      <input
        className={classNames("w-full px-2 py-1 text-sm")}
        name="comment"
        type="text"
        placeholder="Comment on this book here"
        required
      />
      <button className={classNames("button")} type="submit">
        <SubmitComment />
      </button>
    </form>
  );
}
