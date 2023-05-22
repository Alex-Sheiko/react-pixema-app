import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth";
import { toast } from "react-toastify";
import {
  FirebaseErrorMessage,
  getFirebaseErrorMessage,
  UserModel,
  resetUserPassword,
  updateUserData,
  userLogOut,
  userSignIn,
  userSignUp,
} from "services";
import { SettingsData, SignInData, SignUpData } from "types";

interface UserType {
  name: string | null;
  email: string | null;
  id: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

export const signUp = createAsyncThunk<
  UserModel | undefined,
  SignUpData,
  { rejectValue: FirebaseErrorMessage }
>("user/signUp", async (userData, { rejectWithValue }) => {
  try {
    return await userSignUp(userData);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const signIn = createAsyncThunk<
  UserModel | undefined,
  SignInData,
  { rejectValue: FirebaseErrorMessage }
>("user/signIn", async (userData, { rejectWithValue }) => {
  try {
    return await userSignIn(userData);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const userSignOut = createAsyncThunk<void, void, { rejectValue: FirebaseErrorMessage }>(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await userLogOut();
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError));
    }
  },
);

export const resetPassword = createAsyncThunk<
  string | undefined,
  string,
  { rejectValue: FirebaseErrorMessage }
>("user/resetPassword", async (email, { rejectWithValue }) => {
  try {
    await resetUserPassword(email);
    return email;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const updateUserProfile = createAsyncThunk<
  void,
  SettingsData,
  { rejectValue: FirebaseErrorMessage }
>("user/updateProfile", async (userData, { rejectWithValue }) => {
  try {
    await updateUserData(userData);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

const initialState: UserType = {
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
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      if (payload) {
        state.name = payload.displayName;
        state.email = payload.email;
        state.id = payload.uid;
        state.isAuth = true;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.name = payload.name;
        state.email = payload.email;
        state.id = payload.id;
        state.isAuth = true;
        toast.success(`${state.name} is logged`);
      }
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
        toast.error(payload);
      }
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.name = payload.name;
        state.email = payload.email;
        state.isAuth = true;
        toast.success(`${state.name} sign in`);
      }
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
        toast.error(payload);
      }
    });
    builder.addCase(userSignOut.fulfilled, (state, action) => {
      toast.success("Logout is success");
      state.isAuth = false;
      state.email = "";
      state.name = "";
    });
    builder.addCase(userSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        toast.error(payload);
      }
    });
    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      toast.success(`You will receive an email ${payload} with a link to reset your password!`);
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      if (payload) {
        toast.error(payload);
      }
    });
    builder.addCase(updateUserProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Your Profile updated");
    });
    builder.addCase(updateUserProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        toast.error(payload);
      }
    });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
