import React from "react";
import "./SongItem.css";

function SongItem({ song, setPlaying, fileIndex }) {
  return (
    <p
      className="song-item"
      onClick={() => {
        setPlaying({ filename: song.filename, index: fileIndex });
      }}
    >
      {song.filename}
    </p>
  );
}

export default SongItem;
