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
