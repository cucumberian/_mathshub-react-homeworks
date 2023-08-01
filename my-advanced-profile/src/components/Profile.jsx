import React, { useState, useRef } from "react";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileName from "./ProfileName/ProfileName";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHobbies from "./ProfileHobbies/ProfileHobbies";
import ProfileCitation from "./ProfileCitation/ProfileCitation";
import Counter from "./Counter/Counter";
import "./Profile.css";

function Profile({ userData }) {
  const [monsterCounter, setMonsterCounter] = useState(
    userData.todayMonsterCount
  );

  function clickMinus() {
    setMonsterCounter(monsterCounter - 1);
  }

  function clickPlus() {
    setMonsterCounter(monsterCounter + 1);
  }

  const ProfileElement = useRef(null);

  const Divv = (
    <div ref={ProfileElement} className="divClass1 divClass2">
      text sample
    </div>
  );
  console.log(`divv = `, Divv);
  console.log("ProfileElement = ", ProfileElement);

  return (
    <div className="profile">
      <ProfilePicture url={userData.avatar_url} />
      <ProfileName name={userData.name} />
      <ProfileBio text={userData.bio} />
      <ProfileHobbies hobbiesList={userData.hobbies} />
      <ProfileCitation
        text={userData.citation.text}
        author={userData.citation.author}
      />
      <Counter
        counterValue={monsterCounter}
        clickMinus={clickMinus}
        clickPlus={clickPlus}
      />
      {Divv}
    </div>
  );
}

export default Profile;
