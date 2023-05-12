import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { getUser, useAppSelector } from "store";
import { Content, StyledMainLayout } from "./styles";
import { Header, SideBar, Spinner } from "components";

export const MainLayout = () => {
  const { isLoading } = useAppSelector(getUser);
  const { width } = useWindowSize();
  if (isLoading) return <Spinner />;
  return (
    <AnimatePresence>
      <StyledMainLayout
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
      </StyledMainLayout>
    </AnimatePresence>
  );
};
