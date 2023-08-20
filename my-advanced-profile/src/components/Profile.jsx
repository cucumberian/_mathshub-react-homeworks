/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileName from "./ProfileName/ProfileName";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHobbies from "./ProfileHobbies/ProfileHobbies";
import ProfileCitation from "./ProfileCitation/ProfileCitation";
import Counter from "./Counter/Counter";

import { UserDataContext } from "../context/userData-context";

import "./Profile.css";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("Profile, context =", this.context);
    this.setState({ monsterCounter: this.context.userData.todayMonsterCount });
  }

  clickMinus() {
    this.setState((prevState) => ({
      monsterCounter: prevState.monsterCounter - 1,
    }));
  }

  clickPlus() {
    this.setState((prevState) => ({
      monsterCounter: prevState.monsterCounter + 1,
    }));
  }

  render() {
    return (
      <div className="profile">
        <ProfilePicture />
        <ProfileName />
        <ProfileBio />
        <ProfileHobbies />
        <ProfileCitation />
        <Counter
          counterValue={this.state.monsterCounter}
          clickMinus={this.clickMinus.bind(this)}
          clickPlus={this.clickPlus.bind(this)}
        />
      </div>
    );
  }
}

Profile.contextType = UserDataContext;

export default Profile;
