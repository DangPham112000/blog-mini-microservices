function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "pending") {
      content = "Waiting moderation";
    }
    if (comment.status === "rejected") {
      content = "Rejected comment";
    }
    if (comment.status === "approved") {
      content = comment.content;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
