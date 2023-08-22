import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieContextProvider } from "./context/movie-context";
import "./index.css";
import "./colors.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <App className="colors" />
  </MovieContextProvider>
);
