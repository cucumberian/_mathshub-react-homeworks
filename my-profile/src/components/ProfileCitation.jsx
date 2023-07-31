import React from "react";

function ProfileCitation({ text, author }) {
  return (
    <>
      <q>
        <p>{text}</p>
      </q>
      <figcaption>
        <cite>{author}</cite>
      </figcaption>
    </>
  );
}

export default ProfileCitation;
