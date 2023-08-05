import React from "react";

function ProfileName({ name, commonClass }) {
  return (
    <p className={commonClass}>
      <strong>Имя:</strong> {name}
    </p>
  );
}

export default ProfileName;
