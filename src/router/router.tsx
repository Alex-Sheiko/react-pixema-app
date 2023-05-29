import { MainTemplate, AuthTemplate, AuthRequiredTemplate } from "components";
import {
  DetailsPage,
  ErrorPage,
  FavoritesPage,
  HomePage,
  LogInPage,
  RegistrationPage,
  PasswordResetPage,
  SearchPage,
  SettingsPage,
  TrendsPage,
} from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} errorElement={<ErrorPage />}>
      <Route element={<MainTemplate />}>
        <Route index path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.MOVIE} element={<DetailsPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<AuthRequiredTemplate />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTE.LOGIN} element={<LogInPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<PasswordResetPage />} />
      </Route>
    </Route>,
  ),
);
