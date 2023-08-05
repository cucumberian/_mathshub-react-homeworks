import React from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const userData = {
    avatar_url:
      "https://pm1.aminoapps.com/6921/d5a8b1ee01447a49a198dcb5d507a25c1e7396b5r1-906-868v2_uhq.jpg",
    name: "Сайтама",
    bio: "Работал в супермаркете, потом начал тренироваться каждый день и вступил в ассоциацию супергероев. Очень сильный.",
    citation: {
      text: "Мне лень. Cлишком хлопотно.",
      author: "Сайтама",
    },
    hobbies: [
      { id: 0, name: "Видеоигры" },
      { id: 1, name: "Поход по скидкам в магазин" },
      { id: 2, name: "Тренировки" },
    ],
    todayMonsterCount: Math.floor(Math.random() * 10 + 1),
  };

  return (
    <div className="App">
      <Profile userData={userData} commonClass="width_100" />
    </div>
  );
}

export default App;
