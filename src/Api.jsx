import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GrBFB8Z5spQmw80r18rliqwqy3GXisebIyar8LjUrhk",
    },
    params: {
      query: term,
    },
  });
  // debugger;
  return response.data.results;
};

export default searchImages;
