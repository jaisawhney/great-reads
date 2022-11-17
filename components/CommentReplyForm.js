import classNames from "classnames";

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
    <form onSubmit={createReply}>
      <input
        className={classNames("text-black p-1")}
        type="text"
        name="comment"
        placeholder="Your reply..."
      />
      <button className={classNames("button")} type="submit">
        Submit
      </button>
    </form>
  );
}
