import React, { useContext } from "react";
import "./Sidebar.css";
import { BiRefresh } from "react-icons/bi";

import UserContext from "../../context/user-context";
import UserAvatar from "../../ui/UserAvatar";

function Sidebar() {
  const userContext = useContext(UserContext);

  const getRandomAvatarHandler = () => {
    const jsonProcessFunc = (json) => {
      console.log("jsonProcessFunc.json =", json);
      userContext.setUser((prev) => ({
        ...prev.user,
        ...json.user,
        hash: localStorage.getItem("userHash"),
      }));
    };

    const newAvatarUrl = userContext.getRandomAvatarUrl();
    userContext.updateUser({
      userPartialData: {
        hash: localStorage.getItem("userHash"),
        avatarUrl: newAvatarUrl,
      },
      func: jsonProcessFunc,
    });
  };

  return (
    <div className="sidebar">
      <div className="user_avatar">
        <UserAvatar
          src={userContext.user.avatarUrl}
          title={`Это вы - ${userContext.user.firstname} ${userContext.user.lastname}`}
        />
        <BiRefresh
          className="refresh_avatar"
          type="button"
          onClick={getRandomAvatarHandler}
          title="поменять на случайный аватар"
        />
      </div>

      <p className="username" title="Это ваше имя">
        {userContext.user.firstname} {userContext.user.lastname}
      </p>
    </div>
  );
}

export default Sidebar;
