import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string | null;
  email: string | null;
  id: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: User = {
  name: "",
  email: "",
  id: "",
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
