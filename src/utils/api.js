import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://mt-backend-nc-games.onrender.com/api",
});

// -- wrapper functions for axios.get()
export const fetchReviews = () => {
  let path = `/reviews`;

  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const fetchReviewById = (id) => {
  let path = `/reviews/${id}`;

  return gamesApi.get(path).then(({ data }) => {
    return data.review;
  });
};

export const fetchCommentsByReviewId = (id) => {
  let path = `/reviews/${id}/comments`;

  return gamesApi.get(path).then(({ data }) => {
    return data.comments;
  });
};

export const voteForReview = (id, inc) => {
  console.log(id, "<< rev id");
  return gamesApi
    .patch(`/reviews/${id}`, {
      inc_votes: inc,
      // second argument is params
    })
    .then(({ data }) => {
      console.log(data.updated_review.votes, "<< votes after api request");
      return data;
    });
};
