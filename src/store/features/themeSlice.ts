import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "types";
interface ITheme {
  theme: Theme;
}

const initialState: ITheme = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
