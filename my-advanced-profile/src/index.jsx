import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import UserDataContextProvider from "./context/userData-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserDataContextProvider>
    <App />
  </UserDataContextProvider>
);
