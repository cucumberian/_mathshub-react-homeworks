import React from "react";
import SongItem from "../SongItem/SongItem";
import "./SongList.css";

class SongList extends React.Component {
  render() {
    return (
      <div className="song-list">
        {this.props.songList.map((song) => (
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
}

export default SongList;
