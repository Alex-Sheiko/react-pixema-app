import { store } from "store";
import { router } from "router";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "ui";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);
