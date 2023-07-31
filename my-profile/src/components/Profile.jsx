import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileBio from "./ProfileBio";
import ProfileHobbies from "./ProfileHobbies";
import ProfileCitation from "./ProfileCitation";

import user from "./user";

function Profile() {
  return (
    <>
      <p>Profile</p>
      <ProfilePicture url={user.avatar_url} />
      <ProfileName name={user.name} />
      <ProfileBio text={user.bio} />
      <ProfileHobbies hobbiesList={user.hobbies} />
      <ProfileCitation
        text={user.citation.text}
        author={user.citation.author}
      />
    </>
  );
}

export default Profile;
