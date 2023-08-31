import React from "react";
import Post from "../Post/Post";

import "./Posts.css";

function Posts() {
  const posts = [
    {
      sender: { name: "aaa", phone: 111, address: "123123" },
      reciever: { name: "aaa", phone: 2, address: "123123" },
      id: 0,
    },
    {
      sender: { name: "bbb", phone: 2, address: "123123" },
      reciever: { name: "aaa", phone: 111, address: "123123" },
      id: 1,
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
