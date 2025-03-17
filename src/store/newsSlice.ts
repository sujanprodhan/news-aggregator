import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsFromNewsAPI, fetchNewsFromGuardian, fetchNewsFromNYTimes } from "../services/api";

// Update fetchNews to accept an object containing both query and keyword
export const fetchNews = createAsyncThunk(
  "news/fetchNews", 
  async ({ query, keyword }: { query: string, keyword: string }) => {
    const newsAPI = await fetchNewsFromNewsAPI(query, keyword);
    const guardian = await fetchNewsFromGuardian(query, keyword);
    // const nytimes = await fetchNewsFromNYTimes(query, keyword);
    return [...newsAPI, ...guardian];
  }
);

interface NewsState {
  articles: any[];
  status: string;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load articles";
      });
  },
});

export default newsSlice.reducer;
