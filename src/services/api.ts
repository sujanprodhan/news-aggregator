import axios from "axios";

// import dotenv from "dotenv";
// dotenv.config();

const NEWS_API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_KEY;
const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_KEY;

// Fetch from NewsAPI
export const fetchNewsFromNewsAPI = async (query = "latest") => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
  );
  // return response.data.articles;
  return response.data.articles.map((article: any) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    imageUrl: article.urlToImage,
  }));
};

// Fetch from The Guardian API
export const fetchNewsFromGuardian = async (query = "latest") => {
  const response = await axios.get(
    `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}&show-fields=all`
  );
  // return response.data.response.results;
  return response.data.response.results.map((article: any) => ({
    title: article.fields.headline,
    description: article.fields.trailText,
    url: article.webUrl,
    imageUrl: article.fields.thumbnail,
  }));
};

// Fetch from New York Times
export const fetchNewsFromNYTimes = async (query = "latest") => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYTIMES_API_KEY}`
  );
  // return response.data.response.docs;
  return response.data.response.docs.map((article: any) => ({
    title: article.headline.main,
    description: article.abstract,
    url: article.web_url,
    imageUrl: article.multimedia.length
      ? `https://www.nytimes.com/${article.multimedia[0].url}`
      : null,
  }));
};
