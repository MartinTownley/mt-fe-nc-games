import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({
  review_id,
  title,
  owner,
  created_at,
  votes,
  comment_count,
}) => {
  return (
    <article className="Review-Card">
      {/* <h4> {title} </h4> */}
      <Link to={`/reviews/${review_id}`}>{title}</Link>
      <p> Reviewer: {owner} </p>
      <p> Created at: {new Date(created_at).toLocaleDateString()} </p>
      <p> Comments: {comment_count} </p>
      <p> Votes: {votes} </p>
    </article>
  );
};

export default ReviewCard;
