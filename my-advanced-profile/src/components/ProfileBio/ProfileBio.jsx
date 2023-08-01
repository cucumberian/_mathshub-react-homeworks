import React from "react";

function ProfileBio({ text, commonClass }) {
  return (
    <p className={commonClass}>
      <strong>Краткая биография: </strong>
      {text}
    </p>
  );
}

export default ProfileBio;
