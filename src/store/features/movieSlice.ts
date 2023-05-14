import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { moviesApi, transformMovieInfo } from "services";
import { MovieInfo, MovieInfoAPI } from "types";
interface MovieState {
  movie: MovieInfo;
  isLoading: boolean;
  error: null | string;
}

const initialState: MovieState = {
  movie: {} as MovieInfo,
  isLoading: false,
  error: null,
};

export const getMovieById = createAsyncThunk<MovieInfoAPI, string, { rejectValue: string }>(
  "movies/getMovie",
  async (id: string, { rejectWithValue }) => {
    try {
      return await moviesApi.getMovie(id);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovieById.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getMovieById.fulfilled, (state, { payload }) => {
      state.error = null;
      state.isLoading = false;
      state.movie = transformMovieInfo(payload);
    });
    builder.addCase(getMovieById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movieSlice.reducer;
