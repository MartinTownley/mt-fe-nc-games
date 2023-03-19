import React from "react";
import { useState, useEffect } from "react";
import { getSingleReview, voteForReview } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [userVote, setUserVote] = useState(0);

  const handleOnClick = (inc) => {
    // inc passed in is 1 or -1 for up and down vote respectively
    // set user vote here for optimistic rendering
    setUserVote(inc);
    //console.log(`voted for ${review_id}  `);

    voteForReview(review_id, inc);
  };

  useEffect(() => {
    getSingleReview(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  return (
    <main className="Single-Review">
      <img src={review.review_img_url} className="review-img" />
      <h3>{review.title}</h3>
      <p>
        by <strong> {review.owner}</strong>
      </p>
      <p>{review.review_body}</p>
      <p>Votes: {review.votes + userVote}</p>
      <button
        className="vote-up"
        onClick={() => handleOnClick(1)}
        disabled={userVote !== 0}
      >
        ⬆️{" "}
      </button>
      <button
        className="vote-down"
        onClick={() => handleOnClick(-1)}
        disabled={userVote !== 0}
      >
        ⬇️
      </button>
    </main>
  );
};

export default SingleReview;
