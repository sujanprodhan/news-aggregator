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
  return response.data.articles;
};

// Fetch from The Guardian API
export const fetchNewsFromGuardian = async (query = "latest") => {
  const response = await axios.get(
    `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}&show-fields=all`
  );
  return response.data.response.results;
};

// Fetch from New York Times
export const fetchNewsFromNYTimes = async (query = "latest") => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYTIMES_API_KEY}`
  );
  return response.data.response.docs;
};
