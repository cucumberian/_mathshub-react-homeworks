import React, { useContext } from "react";
import UserContext from "../../context/user-context";

function User() {
  const userContext = useContext(UserContext);

  return (
    <div>
      <p>Имя пользователя</p>
      <img src="" caption="имя пользователя" alt="аватар пользователя" />
    </div>
  );
}

export default User;
