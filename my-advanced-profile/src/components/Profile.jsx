import React from "react";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileName from "./ProfileName/ProfileName";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHobbies from "./ProfileHobbies/ProfileHobbies";
import ProfileCitation from "./ProfileCitation/ProfileCitation";
import Counter from "./Counter/Counter";
import "./Profile.css";

function Profile({ userData, commonClass }) {
  return (
    <div className="profile">
      <ProfilePicture url={userData.avatar_url} />
      <ProfileName name={userData.name} commonClass={commonClass} />
      <ProfileBio text={userData.bio} commonClass={commonClass} />
      <ProfileHobbies
        hobbiesList={userData.hobbies}
        commonClass={commonClass}
      />
      <ProfileCitation
        text={userData.citation.text}
        author={userData.citation.author}
        commonClass={commonClass}
      />
      <Counter counterInitialValue={userData.todayMonsterCount} />
    </div>
  );
}

export default Profile;
