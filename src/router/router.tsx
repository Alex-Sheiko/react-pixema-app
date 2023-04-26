import { HomePage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route index path="/" element={<HomePage />} />),
);
