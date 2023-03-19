import React from "react";
import { useState, useEffect } from "react";

import {
  fetchReviewById,
  fetchCommentsByReviewId,
  voteForReview,
} from "../utils/api";

import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  const commentCount = comments.length;
  const { reviewId } = useParams();

  const handleOnClick = (inc) => {
    // inc passed in is 1 or -1 for up and down vote respectively
    setIsVotingErr(false);
    setUserVote(inc);

    voteForReview(reviewId, inc).catch(() => {
      setUserVote(0); // reset to default
      setIsVotingErr(true);
    });
  };

  useEffect(() => {
    fetchReviewById(reviewId).then((reviewData) => {
      setReview(reviewData);
    });
  }, [reviewId]);

  useEffect(() => {
    fetchCommentsByReviewId(reviewId).then((commentsData) => {
      console.log(commentsData, "<< comments data");
      setComments(commentsData);
    });
  }, [reviewId]);

  return (
    <main className="Single-Review">
      <img src={review.review_img_url} className="review-img" />
      <h2 className="Review-Title">{review.title} </h2>
      <p className="Review-Owner">
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
      {isVotingErr && <p> Vote unsuccessful due to an error.</p>}

      <CommentsList comments={comments} />
    </main>
  );
};

export default SingleReview;
