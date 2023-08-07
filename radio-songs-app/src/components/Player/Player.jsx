import React from "react";

function Player({ fileData }) {
  console.log(fileData);
  const clickHandler = (e) => {
    const player = document.getElementById("music-player");
    player.play();
  };

  return (
    <audio
      controls
      autoplay="true"
      className="music-player"
      id="music-player"
      src={fileData.result}
      onClick={clickHandler}
    >
      <a href={fileData.filename}>Download audio</a>.
    </audio>
  );
}

export default Player;
