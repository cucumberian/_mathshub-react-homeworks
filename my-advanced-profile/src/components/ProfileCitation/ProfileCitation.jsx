/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { UserDataContext } from "../../context/userData-context";

class ProfileCitation extends React.Component {
  render() {
    return (
      <div>
        <p>
          <strong>Цитата: </strong>
        </p>
        <q>
          <p>{this.context.userData.citation.text}</p>
        </q>
        <figcaption>
          <cite>{this.context.userData.citation.author}</cite>
        </figcaption>
      </div>
    );
  }
}

ProfileCitation.contextType = UserDataContext;

export default ProfileCitation;
