import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieInfo } from "types";
import { RootState } from "store";
import {
  addFavoriteToStore,
  deleteFavoriteFromStore,
  FirebaseErrorMessage,
  getFavoritesFromStore,
  getFirebaseErrorMessage,
} from "services";
import { FirebaseError } from "firebase/app";

interface FavoritesState {
  favorites: MovieInfo[];
  isLoading: boolean;
}

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
};

export const addFavorite = createAsyncThunk<
  void,
  MovieInfo,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/add", async (movieInfo, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    if (id) {
      await addFavoriteToStore(movieInfo, id);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const fetchFavorites = createAsyncThunk<
  MovieInfo[] | undefined,
  void,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/fetch", async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    if (id) {
      return await getFavoritesFromStore(id);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const deleteFavorite = createAsyncThunk<
  void,
  string,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/delete", async (movieId, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    id && (await deleteFavoriteFromStore(movieId, id));
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addFavorite.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addFavorite.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchFavorites.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.favorites = payload;
      }
    });
    builder.addCase(fetchFavorites.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(deleteFavorite.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteFavorite.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default favoritesSlice.reducer;
