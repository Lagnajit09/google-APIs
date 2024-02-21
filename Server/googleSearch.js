const axios = require("axios");
require("dotenv").config();

// Define your Custom Search Engine ID and API key
const CSE_ID = process.env.CSE_ID;
const API_KEY = process.env.GOOGLE_CONSOLE_API_KEY;
const SEARCH_QUERY = "youtube physics tutorial";

// Perform a Google search and fetch the results
async function searchGoogle(query) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          q: query,
          cx: CSE_ID,
          key: API_KEY,
        },
      }
    );
    const searchResults = response.data.items;
    console.log(searchResults[0].pagemap);
    return searchResults.map((result) => ({
      title: result.title,
      link: result.link,
    }));
  } catch (error) {
    console.error("Error searching Google:", error.message);
    return [];
  }
}

// Example usage
searchGoogle(SEARCH_QUERY)
  .then((results) => {
    // console.log("Search results for", SEARCH_QUERY, ":");
    // results.forEach((result, index) => {
    //   console.log(`${index + 1}. ${result.title}: ${result.link}`);
    // });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
