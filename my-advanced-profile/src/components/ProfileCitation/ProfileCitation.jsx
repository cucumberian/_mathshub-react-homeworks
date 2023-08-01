import React from "react";

function ProfileCitation({ text, author }) {
  return (
    <div>
      <p>
        <strong>Цитата: </strong>
      </p>
      <q>
        <p>{text}</p>
      </q>
      <figcaption>
        <cite>{author}</cite>
      </figcaption>
    </div>
  );
}

export default ProfileCitation;
