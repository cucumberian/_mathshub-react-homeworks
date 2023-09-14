import React, { useContext } from "react";
import UserContext from "../../context/user-context";

import "./User.css";

function User() {
  const userContext = useContext(UserContext);

  const usernames = `${userContext.user.firstname || "имя"} ${
    userContext.user.lastname || ""
  }`;

  return (
    <div className="header_user">
      <p>{usernames}</p>
      <img src={userContext.user.avatarUrl} title={usernames} alt="аватар" />
    </div>
  );
}

export default User;
