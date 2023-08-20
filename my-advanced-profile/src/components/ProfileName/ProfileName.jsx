/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { UserDataContext } from "../../context/userData-context";

class ProfileName extends React.Component {
  render() {
    return (
      <p>
        <strong>Имя:</strong> {this.context.userData.name}
      </p>
    );
  }
}

ProfileName.contextType = UserDataContext;

export default ProfileName;
