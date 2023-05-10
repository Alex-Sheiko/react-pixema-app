import { createSlice } from "@reduxjs/toolkit";
import { MovieInfo } from "types";
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

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
