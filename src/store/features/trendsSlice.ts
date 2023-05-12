import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { moviesApi, transformMovies } from "services";
import { Movie, MovieSearchAPI } from "types";

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  error: null,
};

export const fetchTrends = createAsyncThunk<MovieSearchAPI, number, { rejectValue: string }>(
  "trends/fetchTrends",
  async (page, { rejectWithValue }) => {
    try {
      return await moviesApi.getSearchMovies({ name: "avengers", type: "movie", page });
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.trends = transformMovies(payload.Search);
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
