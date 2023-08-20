import React from "react";

const UserDataContext = React.createContext({});

const userData = {
  avatar_url:
    "https://i.pinimg.com/originals/2a/b5/f3/2ab5f30cf2fc1cd7c5bc2c1e02dd608b.png",
  name: "Сайтама",
  bio: "Работал в супермаркете, потом начал тренироваться каждый день и вступил в ассоциацию супергероев. Очень сильный.",
  citation: {
    text: "Мне лень. Cлишком хлопотно.",
    author: "Сайтама",
  },
  hobbies: [
    { id: 0, name: "Видеоигры" },
    { id: 1, name: "Поход по скидкам в магазин" },
    { id: 2, name: "Экономия" },
  ],
  todayMonsterCount: Math.floor(Math.random() * 10 + 1),
};

function UserDataContextProvider({ children }) {
  return (
    <UserDataContext.Provider value={React.useMemo(() => ({ userData }))}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContextProvider;
export { UserDataContext };
