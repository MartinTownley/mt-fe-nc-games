import React from "react";
import { useState, useEffect } from "react";
import { fetchReviewById } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { reviewId } = useParams();
  // we'll use reviewId to fetch data from the API.
  // if the reviewId is changed (by the user navigating to a new review) then the component will be re-rendered with the new reviewId.
  // if the reviewId changes, re-run the effect and fetch new data.

  useEffect(() => {
    fetchReviewById(reviewId).then((reviewData) => {
      setReview(reviewData);
    });
  }, [reviewId]);

  return (
    <main className="Single-Review">
      <img src={review.review_img_url} className="review-img" />
      <h3>{review.title} </h3>
      <p>
        by <strong> {review.owner}</strong>
      </p>
      <p>{review.review_body}</p>
      <p>Votes: {review.votes}</p>
    </main>
  );
};

export default SingleReview;
