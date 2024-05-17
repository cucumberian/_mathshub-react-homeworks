import React from "react";
import "./SongItem.css";

class SongItem extends React.Component {
  render() {
    return (
      <div className="song-item">
        <p>{this.props.name}</p>
        <p>{this.props.artist}</p>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default SongItem;
