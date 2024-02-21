const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Give me links to study physics from udemy, youtube, gfg, tutorialspoint, javatpoint, coursera, toppr or any other resources available. Give me only link to the resource and image links in an json format. The format should be like the following, link = {
        "youtube": {
          "image-link": "link for image",
          "link1": "link for video/playlist 1",
          "link2": "link for video/playlist 2",
          "link3": "link for video/playlist 3",
          "link4": "link for video/playlist 4",
          "link5": "link for video/playlist 5",
        },
        "gfg": {
          "image-link: "image-link from gfg",
          "link1: "link from gfg",
        },
        "tutorialspoint": {
      
        },
        "javatpoint": {
      
        },
        "udemy": {
          
        }
      }`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
