/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { UserDataContext } from "../../context/userData-context";

class ProfileBio extends React.Component {
  render() {
    return (
      <div>
        <p>
          <strong>Краткая биография: </strong>
          {this.context.userData.bio}
        </p>
      </div>
    );
  }
}

ProfileBio.contextType = UserDataContext;

export default ProfileBio;
