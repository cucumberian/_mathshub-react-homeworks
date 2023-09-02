import React from "react";
import Post from "../Post/Post";
import { useSelector } from "react-redux";

import "./Posts.css";

function Posts() {
  const posts = useSelector((state) => state.posts);

  // const posts = {
  //   0: {
  //     sender: { name: "aaa", phone: 111, address: "123123" },
  //     reciever: { name: "aaa", phone: 2, address: "123123" },
  //     id: 0,
  //   },
  //   1: {
  //     sender: { name: "bbb", phone: 2, address: "123123" },
  //     reciever: { name: "aaa", phone: 111, address: "123123" },
  //     id: 1,
  //   },
  // };

  return (
    <fieldset className="posts">
      <legend>Посылки</legend>

      {Object.values(posts).length > 0 ? (
        Object.entries(posts).map(([id, post]) => <Post key={id} post={post} />)
      ) : (
        <p>Посылок пока ещё нет</p>
      )}
    </fieldset>
  );
}

export default Posts;
