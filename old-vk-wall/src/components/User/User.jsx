import React, { useContext } from "react";
import UserContext from "../../context/user-context";
import UserAvatar from "../../ui/UserAvatar";
import "./User.css";

function User() {
  const userContext = useContext(UserContext);

  const usernames = `${userContext.user.firstname || "имя"} ${
    userContext.user.lastname || ""
  }`;

  return (
    <div className="header_user">
      <a href="" className="header-username">
        {usernames}
      </a>
      <UserAvatar
        className="header-user_avatar"
        src={userContext.user.avatarUrl}
        title={usernames}
        alt="аватар"
      />
    </div>
  );
}

export default User;
