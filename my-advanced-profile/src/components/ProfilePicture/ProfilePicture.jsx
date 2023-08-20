/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

import { UserDataContext } from "../../context/userData-context";

import "./ProfilePicture.css";

class ProfilePicture extends React.Component {
  render() {
    return (
      <img
        src={this.context.userData.avatar_url}
        alt="аватарка"
        className="profilePicture"
      />
    );
  }
}

ProfilePicture.contextType = UserDataContext;

export default ProfilePicture;
