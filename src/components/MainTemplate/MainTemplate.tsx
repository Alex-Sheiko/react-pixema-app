import { Header, Spinner, SideBar } from "components";
import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { getUser, useAppSelector } from "store";
import { Content, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  const { isLoading } = useAppSelector(getUser);
  const { width } = useWindowSize();
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
