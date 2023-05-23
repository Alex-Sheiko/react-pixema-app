import React from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "ui";
import { store } from "store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { MovieHub } from "MovieHub";
import { Toast } from "components";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <MovieHub />
      <Toast />
    </Provider>
  </>,
);
