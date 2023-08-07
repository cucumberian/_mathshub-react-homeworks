import React from "react";
import SongItem from "../SongItem/SongItem";
import "./SongList.css";

function SongList({ files, setPlaying }) {
  console.log("Show songList =", files);
  const setPlayingHandle = (data) => {
    setPlaying(data);
  };
  return (
    <div className="song-list">
      {files.map((file, index) => (
        <SongItem
          key={index}
          song={file}
          fileIndex={index}
          setPlaying={setPlayingHandle}
        />
      ))}
    </div>
  );
}

export default SongList;
