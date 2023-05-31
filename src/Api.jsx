import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FMouwFd3k08aQvldVDcRmWR-jjKZOPwXMbfDrMWAK7Y",
    },
    params: {
      query: term,
    },
  });
  // debugger;
  return response.data.results;
};

export default searchImages;
