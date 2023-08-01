import React from "react";

function ProfileName(props) {
  const { name } = props;
  return (
    <p>
      <strong>Имя:</strong> {name}
    </p>
  );
}

export default ProfileName;
