import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Movie, MovieSearchAPI, RequestOption } from "types";
import { moviesApi, transformMovies } from "services";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchHomeMovies = createAsyncThunk<
  MovieSearchAPI | undefined,
  RequestOption,
  { rejectValue: string }
>("movies/fetchHomeMovies", async (options, { rejectWithValue }) => {
  try {
    return await moviesApi.getSearchMovies(options);
  } catch (error) {
    const errorResponse = error as AxiosError;
    return rejectWithValue(errorResponse.message);
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeMovies.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeMovies.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.movies = transformMovies(payload.Search);
      }
    });
    builder.addCase(fetchHomeMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
