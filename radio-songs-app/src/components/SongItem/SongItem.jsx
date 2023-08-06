import React from "react";
import "./SongItem.css";

function SongItem({ name, artist, genre }) {
  return (
    <div className="song-item">
      <p>{name}</p>
      <p>{artist}</p>
      <p>{genre}</p>
    </div>
  );
}

export default SongItem;
