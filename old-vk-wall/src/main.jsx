import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("main")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
