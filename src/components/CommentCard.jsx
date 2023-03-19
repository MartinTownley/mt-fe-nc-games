import React from "react";

const CommentCard = ({ key, author, body, created_at, votes }) => {
  return (
    <article className="Comment-Card">
      <p>
        @<strong>{author}</strong> -•-{" "}
        {new Date(created_at).toLocaleDateString()}
      </p>
      <p> {body}</p>
    </article>
  );
};

export default CommentCard;
