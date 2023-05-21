import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { getTheme, getUser, useAppSelector } from "store";
import { Content, StyledMainTemplate } from "./styles";
import { Header, SideBar, Spinner } from "components";
import { useEffect } from "react";

export const MainTemplate = () => {
  const { isLoading } = useAppSelector(getUser);
  const { width } = useWindowSize();
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  if (isLoading) return <Spinner />;
  return (
    <AnimatePresence>
      <StyledMainTemplate
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {width && width >= 1281 && <SideBar />}
        <Content>
          <Header />
          <Outlet />
        </Content>
      </StyledMainTemplate>
    </AnimatePresence>
  );
};
