import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
