import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { getTheme, setUser, useAppDispatch, useAppSelector } from "store";

export const App = () => {
  const { theme } = useAppSelector(getTheme);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  useEffect(() => onAuthStateChanged(auth, (user) => dispatch(setUser(user))), [dispatch, auth]);
  return <RouterProvider router={router} />;
};
