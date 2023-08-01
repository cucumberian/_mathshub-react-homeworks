import React from "react";

function ProfileHobbies({ hobbiesList }) {
  return (
    <div>
      <p>
        <strong>Хобби:</strong>
      </p>

      <ul>
        {hobbiesList.map((hobbie) => (
          <li key={hobbie.id}>{hobbie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileHobbies;
