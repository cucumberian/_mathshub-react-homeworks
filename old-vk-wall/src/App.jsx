import React from "react";

import Header from "./components/Header/Header";
import DrawBoard from "./components/DrawBoard/DrawBoard";
import Drawings from "./components/Drawings/Drawings";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import { DrawContextProvider } from "./context/draw-context";
import { UserContextProvider } from "./context/user-context";

import "./App.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <DrawContextProvider>
          <div className="app">
            <Header />
            <div className="main_page">
              <Sidebar />
              <div>
                <DrawBoard />
                <Drawings />
              </div>
            </div>
            <Footer />
          </div>
        </DrawContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
