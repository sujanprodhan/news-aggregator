import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_KEY;
const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_KEY;

// Fetch from NewsAPI with keyword
export const fetchNewsFromNewsAPI = async (query = "latest", keyword = "") => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&qInTitle=${keyword}&apiKey=${NEWS_API_KEY}`
    );

    return response.data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage,
    }));
  } catch (error) {
    console.error("Error fetching NewsAPI data:", error);
    return []; // Return an empty array if the API call fails
  }
};

// Fetch from The Guardian API with keyword
export const fetchNewsFromGuardian = async (query = "latest", keyword = "") => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=${query}&q=${keyword}&api-key=${GUARDIAN_API_KEY}&show-fields=all`
    );

    return response.data.response.results.map((article: any) => ({
      title: article.fields.headline,
      description: article.fields.trailText,
      url: article.webUrl,
      imageUrl: article.fields.thumbnail,
    }));
  } catch (error) {
    console.error("Error fetching Guardian API data:", error);
    return []; // Return an empty array if the API call fails
  }
};

// Fetch from New York Times with keyword
export const fetchNewsFromNYTimes = async (query = "latest", keyword = "") => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=headline:${keyword}&api-key=${NYTIMES_API_KEY}`
    );

    return response.data.response.docs.map((article: any) => ({
      title: article.headline.main,
      description: article.abstract,
      url: article.web_url,
      imageUrl: article.multimedia.length
        ? `https://www.nytimes.com/${article.multimedia[0].url}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching NYTimes API data:", error);
    return []; // Return an empty array if the API call fails
  }
};
