import axios from "axios";

export const getRandomLists = async (type, genre) => {
  try {
    const res = await axios.get(
      `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async (itemId) => {
  try {
    const res = await axios.get("/movies/find/" + itemId, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRandomContent = async (type) => {
  try {
    const res = await axios.get(`/movies/random?type=${type}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};
