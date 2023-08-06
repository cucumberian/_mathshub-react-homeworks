import React from "react";
import SongItem from "../SongItem/SongItem";
import "./SongList.css";

function SongList({ songList }) {
  return (
    <div className="song-list">
      {songList.map((song) => (
        <SongItem
          key={song.id}
          name={song.name}
          artist={song.artist}
          genre={song.genre}
        />
      ))}
    </div>
  );
}

export default SongList;
