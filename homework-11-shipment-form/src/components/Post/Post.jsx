/* eslint-disable react/prop-types */
import React from "react";

import "./Post.css";

function Post({ post }) {
  return (
    <div className="sendedPost">
      <legend>Посылка</legend>
      <p>id: {post.id}</p>
      <div className="post_route">
        <fieldset>
          <legend>От</legend>
          <p>Имя: {post.senderName}</p>
        </fieldset>
        <fieldset>
          <legend>Кому</legend>
          <p>Имя: {post.recieverName}</p>
        </fieldset>
      </div>
      <div>
        <p>Вес: {post.weight} кг</p>
        <p>
          ДхШхВ (см): {post.length}см x {post.width}см x {post.height}см
        </p>
      </div>
    </div>
  );
}

export default Post;
