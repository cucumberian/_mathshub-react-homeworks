import React from "react";

function AudioPlayer({ fileData }) {
  console.log("fileData =", fileData);
  const fileLink = fileData.result ? fileData.result : fileData.src;
  return <audio src={fileLink} controls autoPlay={true}></audio>;
}

export default AudioPlayer;
