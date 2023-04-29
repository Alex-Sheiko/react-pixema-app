import { App } from "App";
import { store } from "store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
