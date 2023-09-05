import React from "react";

import Header from "./components/Header/Header";
import DrawBoard from "./components/DrawBoard/DrawBoard";
import Drawings from "./components/Drawings/Drawings";
import Footer from "./components/Footer/Footer";

import { DrawContextProvider } from "./context/draw-context";
import { UserContextProvider } from "./context/user-context";

import "./App.css";

function App() {
  return (
    <>
      <div>App</div>

      <UserContextProvider>
        <DrawContextProvider>
          <div className="app">
            <Header />
            <DrawBoard />
            <Drawings />
            <Footer />
          </div>
        </DrawContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
