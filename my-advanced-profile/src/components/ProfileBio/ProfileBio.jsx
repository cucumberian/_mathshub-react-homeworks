import React from "react";

function ProfileBio({ text }) {
  return (
    <div>
      <p>
        <strong>Краткая биография: </strong>
        {text}
      </p>
    </div>
  );
}

export default ProfileBio;
