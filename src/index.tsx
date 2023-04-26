import ReactDOM from "react-dom/client";
import { GlobalStyles } from "ui";
import { App } from "App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
