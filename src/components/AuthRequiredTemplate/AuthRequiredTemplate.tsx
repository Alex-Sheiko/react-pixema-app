import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";

export const AuthRequiredTemplate = () => {
  const { isAuth } = useAppSelector(getUser);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.LOGIN} />;
};
