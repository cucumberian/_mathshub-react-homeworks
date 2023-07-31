import React from "react";

function ProfileHobbies({ hobbiesList }) {
  return (
    <div>
      <p>Список хобби:</p>

      <ul>
        {hobbiesList.map((hobbie) => (
          <li key={hobbie.id}>{hobbie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileHobbies;
