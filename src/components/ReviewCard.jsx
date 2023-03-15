import React from "react";

const ReviewCard = ({
  review_id,
  title,
  owner,
  created_at,
  votes,
  comment_count,
}) => {
  console.log(title, "<<title");

  return (
    <article className="Review-Card">
      {/* <h4> ReviewCard</h4> */}
      <h4> {title} </h4>
      <p> Reviewer: {owner} </p>
      <p> Created at: {new Date(created_at).toLocaleDateString()} </p>
      <p> Comments: {comment_count} </p>
      <p> Votes: {votes} </p>
    </article>
  );
};

export default ReviewCard;
