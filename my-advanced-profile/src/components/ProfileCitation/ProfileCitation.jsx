import React from "react";
import "./ProfileCitation.css";

function ProfileCitation({ text, author, commonClass }) {
  return (
    <div className={`${commonClass} profileCitation`}>
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
