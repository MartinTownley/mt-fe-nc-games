import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewData) => {
      setReviews(reviewData);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="items-list">
      <h3>Reviews</h3>
      {isLoading ? (
        <p> Loading Reviews... </p>
      ) : (
        <ul>
          <li>
            {reviews.map(
              ({
                review_id,
                title,
                owner,
                created_at,
                votes,
                comment_count,
              }) => {
                return (
                  <ReviewCard
                    key={review_id}
                    title={title}
                    owner={owner}
                    created_at={created_at}
                    votes={votes}
                    comment_count={comment_count}
                  ></ReviewCard>
                );
              }
            )}
          </li>
        </ul>
      )}
    </main>
  );
};

export default ReviewsList;
