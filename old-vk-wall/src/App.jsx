import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import { DrawContextProvider } from "./context/draw-context";
import { UserContextProvider } from "./context/user-context";

import "./App.css";
import Messages from "./components/Messages/Messages";
import MessageForm from "./components/MessageForm/MessageForm";

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
                <div className="main_window">
                  <MessageForm />
                  <Messages />
                </div>

                <Footer />
              </div>
            </div>
          </div>
        </DrawContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
