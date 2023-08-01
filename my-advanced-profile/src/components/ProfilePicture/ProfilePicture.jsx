import React from "react";
import "./ProfilePicture.css";

function ProfilePicture({ url, commonClass }) {
  console.log("url = ", url);
  return (
    <img src={url} alt="аватарка" className={`profilePicture ${commonClass}`} />
  );
}

export default ProfilePicture;
