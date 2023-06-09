import { Portal, PortalTarget } from "components";
import { ToastContainer } from "react-toastify";
import { getTheme, useAppSelector } from "store";

export const Toast = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <Portal target={PortalTarget.TOAST}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme={theme}
      />
    </Portal>
  );
};
