import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { fetchReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviewsData) => {
      setReviews(reviewsData);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="Reviews-List">
      <h3>Reviews</h3>
      {isLoading ? (
        <p> Loading Reviews... </p>
      ) : (
        <ul>
          <li>
            {reviews.map((review) => {
              return (
                <ReviewCard
                  key={review.review_id}
                  review_id={review.review_id}
                  title={review.title}
                  owner={review.owner}
                  created_at={review.created_at}
                  votes={review.votes}
                  comment_count={review.comment_count}
                ></ReviewCard>
              );
            })}
          </li>
        </ul>
      )}
    </main>
  );
};

export default ReviewsList;
