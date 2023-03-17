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
    //console.log(data, "<< data in fetchCommentsByReviewId");
    return data.comments;
  });
};
