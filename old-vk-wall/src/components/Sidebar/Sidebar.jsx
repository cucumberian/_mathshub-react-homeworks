import React, { useContext } from "react";
import "./Sidebar.css";
import { BiRefresh } from "react-icons/bi";

import UserContext from "../../context/user-context";

function Sidebar() {
  const userContext = useContext(UserContext);

  const getRandomAvatarHandler = () => {
    const jsonProcessFunc = (json) => {
      console.log("jsonProcessFunc.json =", json);
      userContext.setUser((prev) => ({ ...prev.user, ...json.user }));
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
        <img src={userContext.user.avatarUrl} />
        <BiRefresh
          className="refresh_avatar"
          type="button"
          onClick={getRandomAvatarHandler}
        />
      </div>

      <p className="username">
        {userContext.user.firstname} {userContext.user.lastname}
      </p>
    </div>
  );
}

export default Sidebar;
