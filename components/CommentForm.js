import classNames from "classnames";

export default function CommentForm(props) {
  function createComment(e) {
    e.preventDefault();
    const comment = e.target.elements.comment?.value;
    if (!comment) return;

    fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        bookId: props.book.id,
        comment: comment,
      }),
    }).then(async (res) => {
      if (!res.ok) console.log("Problem");
    });
    e.target.reset();
  }

  return (
    <form onSubmit={createComment}>
      <label htmlFor="message" className="text-sm font-medium text-white/80 block mb-2">
        Leave a comment
      </label>
      <input className={classNames("text-sm text-black p-1 block")} type="text" name="comment" />
      <button className={classNames("button")} type="button">
        Submit
      </button>
    </form>
  );
}
