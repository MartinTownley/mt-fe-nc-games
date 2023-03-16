import React from "react";
import { useState, useEffect } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

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
      <p>Votes: {review.votes}</p>
    </main>
  );
};

export default SingleReview;
