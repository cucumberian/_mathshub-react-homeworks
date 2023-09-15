/* eslint-disable react/prop-types */
import React from "react";

function UserAvatar({ src, firstname, lastname, title, className }) {
  return (
    <img
      className={className}
      src={src}
      title={title || `${firstname} ${lastname}`}
      alt="аватар пользователя"
    />
  );
}

export default UserAvatar;
