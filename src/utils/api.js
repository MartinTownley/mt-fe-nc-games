import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://mt-backend-nc-games.onrender.com/api",
});

export const getReviews = () => {
  let path = `/reviews`;

  return gamesApi.get(path).then(({ data }) => {
    console.log(data, "<< data");
    return data.reviews;
  });
};
