import React from "react";
import SongPostForm from "./SongPostForm/SongPostForm";
import SongListSmart from "./SongListSmart/SongListSmart";
import "./Radio.css";

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      songList: [],
      lastId: 0,
    };
  }

  componentDidMount() {
    this.setState({
      songList: this.props.initSongs,
      lastId: this.props.initSongs.at(-1).id + 1,
    });
  }

  postSongHandler(songData) {
    this.setState((prevState) => ({
      lastId: prevState.lastId + 1,
      songList: [{ ...songData, id: this.state.lastId }, ...prevState.songList],
    }));
  }

  deleteSongByIdHandler(songId) {
    this.setState((prevState) => ({
      songList: prevState.songList.filter((song) => song.id !== songId),
    }));
  }

  render() {
    return (
      <div className="radio-container">
        <SongPostForm
          availableGenres={this.props.availableGenres}
          postSong={this.postSongHandler.bind(this)}
        />
        <SongListSmart
          songList={this.state.songList}
          deleteSongById={this.deleteSongByIdHandler.bind(this)}
        />
      </div>
    );
  }
}

export default Radio;
