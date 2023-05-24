import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { moviesApi, transformMovies } from "services";
import { Movie, MovieSearchAPI, RequestOption } from "types";

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

export const fetchTrends = createAsyncThunk<
  MovieSearchAPI | undefined,
  RequestOption,
  { rejectValue: string }
>("trends/fetchTrends", async (options, { rejectWithValue }) => {
  try {
    return await moviesApi.getSearchMovies(options);
  } catch (error) {
    const errorResponse = error as AxiosError;
    return rejectWithValue(errorResponse.message);
  }
});

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
      if (payload) {
        state.isLoading = false;
        state.error = null;

        if (payload.Response === "True") {
          state.trends.push(...transformMovies(payload.Search));
        }
      }
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        toast.error(payload);
      }
    });
  },
});

export default trendsSlice.reducer;
