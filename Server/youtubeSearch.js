const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.GOOGLE_CONSOLE_API_KEY;
const query = "java tutorial";
async function search(query) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          key: API_KEY,
          q: query,
          part: "snippet",
          type: "video",
        },
      }
    );
    const searchResults = response.data.items;
    return searchResults.map((result) => ({
      title: result.snippet.title,
      link: result.link,
    }));
  } catch (error) {
    console.error("Error searching YouTube:", error.message);
    return [];
  }
}

// Example usage
search(query)
  .then((results) => {
    console.log("Search results for", query, ":");
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.title}: ${result.link}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
