/* eslint-disable react/prop-types */
import React, { useState, useCallback, useEffect } from "react";
import { uid } from "../utils";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState({});
  const [userDoesNotExistError, setUserDoesNotExistError] = useState(null);

  const apiVersion = "0.1";
  const [apiUrl, setApiUrl] = useState(
    `http://localhost:8000/api/v${apiVersion}`
  );

  const [generateUserUrl, setGenerateUserUrl] = useState(
    "https://api.parser.name/?api_key=YOUR_KEY&endpoint=generate&country_code=RU"
  );

  const [avatarUrl, setAvatarUrl] = useState(
    "https://api.dicebear.com/7.x/adventurer/svg?"
  );

  const createUserHash = useCallback(() => {
    const userHash = uid();
    // localStorage.setItem("userHash", userHash);
    return userHash;
  }, []);

  // функция для генерация ссылки на случайный аватар пользователя
  const getRandomAvatarUrl = useCallback(() => {
    return (
      avatarUrl +
      new URLSearchParams({ seed: Math.random().toString(), flip: true })
    );
  }, [avatarUrl]);

  const updateUser = async ({ userPartialData, func }) => {
    const response = await fetch(apiUrl + "/users/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPartialData),
    });
    const json = await response.json();
    console.log("updateUser.json =", json);
    if (json.status) {
      func(json);
    }
  };

  // первичная загрузка
  // проверяется в локальном хранилище наличие userHash
  useEffect(() => {
    // загрузка данных пользовтеля из бэка
    const fetchUser = async (userHash) => {
      const response = await fetch(
        apiUrl + `/users/?` + new URLSearchParams({ hash: userHash })
      );
      const json = await response.json();
      console.log("fetchUser.json = ", json);
      if (json.status) {
        setUser({ ...json.user, hash: userHash });
      } else {
        // не удалось получить пользователя из бд (его нет)
        setUserDoesNotExistError(true);
        // удаляем хэш и создаем нового пользовтеля
        localStorage.removeItem("userHash");
        setUserDoesNotExistError(true);
        return;
      }
    };

    const postUser = async ({ user, func }) => {
      const response = await fetch(apiUrl + "/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      func(json);
    };

    // регистрация нового случайного пользовтеля
    const registerNewUser = async (userHash) => {
      // получаю случаное имя фамилию и пол
      const response = await fetch(generateUserUrl);
      const json = await response.json();
      const randomUserData = json.data[0];
      const userName = randomUserData.name;
      const firstname = userName.firstname.name;
      const lastname =
        userName.lastname.name.charAt(0).toUpperCase() +
        userName.lastname.name.substring(1);
      const gender = userName.firstname.gender;
      const userData = { firstname, lastname, gender };

      const user = {
        ...userData,
        avatarUrl: getRandomAvatarUrl(),
        hash: userHash,
      };

      // отправляю даныные пользователя в бд
      postUser({
        user: user,
        // добавляем хэш пользователя в локальное хранилище
        // если пользователь был успешно создан в бд
        func: (json) => {
          if (json.status) {
            localStorage.setItem("userHash", userHash);
            setUser(user);
          }
        },
      });
    };

    // проверяем есть ли уже у пользователя хэш?
    let userHash = localStorage.getItem("userHash");

    // если хэша еще нет, то
    // создаем случайные пользовательские данные, аватарку
    // генерируем хэш
    if (!userHash) {
      console.log("пользователя не существует. Генерирую новый хэш");
      userHash = createUserHash();
      registerNewUser(userHash);
    } else {
      // получаю данные пользователя из бекенда
      fetchUser(userHash);
    }
    setUser({ hash: userHash });
    console.log("user.hash =", userHash);
  }, [userDoesNotExistError, createUserHash, getRandomAvatarUrl]);

  return (
    <UserContext.Provider
      value={{ user, setUser, updateUser, getRandomAvatarUrl }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserContextProvider };
