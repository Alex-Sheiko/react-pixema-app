import { Movie, MovieSearchAPI, RequestOption } from "types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
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

export const fetchSearchMovies = createAsyncThunk<
  MovieSearchAPI | undefined,
  RequestOption,
  { rejectValue: string }
>("movies/fetchSearchMovies", async (options, { rejectWithValue }) => {
  try {
    return await moviesApi.getSearchMovies(options);
  } catch (error) {
    const errorResponse = error as AxiosError;
    return rejectWithValue(errorResponse.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchMovies.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.movies = transformMovies(payload.Search);
      }
    });
    builder.addCase(fetchSearchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
