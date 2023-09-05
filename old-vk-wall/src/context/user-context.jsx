/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from "react";
import { uid } from "../utils";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState({});

  const createNewUser = useCallback(() => {
    const userHash = uid();
    localStorage.setItem("userHash", userHash);
    return userHash;
  }, []);

  useEffect(() => {
    let userHash = localStorage.getItem("userHash");
    if (!userHash) {
      console.log("пользователя не существует. Генерирую новый хэш");
      userHash = createNewUser();
      console.log(`Создан новвый пользвоатель с hash=${userHash}`);
    }
    setUser({ userHash });
    console.log("userHash =", userHash);
  }, [createNewUser]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserContext;
export { UserContextProvider };
