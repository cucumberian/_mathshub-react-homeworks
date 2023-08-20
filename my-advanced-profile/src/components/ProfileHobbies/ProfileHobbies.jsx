/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { UserDataContext } from "../../context/userData-context";

class ProfileHobbies extends React.Component {
  render() {
    return (
      <div>
        <p>
          <strong>Хобби:</strong>
        </p>

        <ul>
          {this.context.userData.hobbies.map((hobbie) => (
            <li key={hobbie.id}>{hobbie.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ProfileHobbies.contextType = UserDataContext;

export default ProfileHobbies;
