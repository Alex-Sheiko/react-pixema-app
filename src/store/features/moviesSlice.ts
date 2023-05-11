import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Movie, MovieSearchAPI, RequestOption } from "types";

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

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
