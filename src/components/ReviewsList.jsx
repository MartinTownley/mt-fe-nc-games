import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewData) => {
      console.log(reviewData, "<< reviewData");
      const { reviews } = reviewData;
      //console.log(reviews, "<< reviews");
      setReviews(reviewData);
    });
  }, []);

  return (
    <main className="items-list">
      <h3>ReviewsList</h3>
      {/* <ReviewCard /> */}
      <ul>
        <li>
          {reviews.map(
            ({ review_id, title, owner, created_at, votes, comment_count }) => {
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
    </main>
  );
};

export default ReviewsList;
