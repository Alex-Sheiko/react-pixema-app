import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "types";

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

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
});

export default trendsSlice.reducer;
