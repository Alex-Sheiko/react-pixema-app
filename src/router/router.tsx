import { ROUTE } from "router";
import { MainTemplate, AuthTemplate } from "components";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  DetailsPage,
  ErrorPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  RegistrationPage,
  ResetPage,
  SearchPage,
  SettingsPage,
  TrendsPage,
} from "pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} errorElement={<ErrorPage />}>
      <Route element={<MainTemplate />}>
        <Route index path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.MOVIE} element={<DetailsPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE.RESET} element={<ResetPage />} />
      </Route>
    </Route>,
  ),
);
