import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { UserDataContext } from "./context/userData-context";

function App() {
  const userDataContext = React.useContext(UserDataContext);
  return (
    <div className="App">
      <Profile userData={userDataContext.userData} />
    </div>
  );
}

export default App;
