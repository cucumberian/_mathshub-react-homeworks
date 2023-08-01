import React from "react";

function ProfileName(props) {
  const { name } = props;
  return (
    <p>
      Имя: <strong>{name}</strong>
    </p>
  );
}

export default ProfileName;
