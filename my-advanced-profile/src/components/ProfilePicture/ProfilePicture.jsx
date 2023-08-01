import React from "react";
import "./ProfilePicture.css";

function ProfilePicture({ url }) {
  return <img src={url} alt="аватарка" className="profilePicture" />;
}

export default ProfilePicture;
