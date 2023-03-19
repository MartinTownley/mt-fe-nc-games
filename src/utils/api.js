import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://mt-backend-nc-games.onrender.com/api",
});

export const getReviews = () => {
  let path = `/reviews`;

  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const getSingleReview = (id) => {
  let path = `/reviews/${id}`;

  return gamesApi.get(path).then(({ data }) => {
    return data.review;
  });
};

export const voteForReview = (id) => {
  return gamesApi
    .patch(`/reviews/${id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      console.log(data.updated_review.votes);
      return data;
    });
};
