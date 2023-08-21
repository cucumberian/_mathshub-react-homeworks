import React, { useState } from "react";
import SongList from "../SongList/SongList";
import SongListFilter from "../SongListFilter/SongListFilter";
import DeleteSongButton from "../DeleteSongButton/DeleteSongButton";
import "./SongListSmart.css";

class SongListSmart extends React.Component {
  constructor() {
    super();
    this.state = {
      genreFilterName: "",
      filteredList: [],
    };
  }

  componentDidMount() {
    this.setState({
      filteredList: this.filterSongs(this.props.songList),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.genreFilterName !== this.state.genreFilterName ||
      prevProps.songList !== this.props.songList
    ) {
      this.setState({
        filteredList: this.filterSongs(this.props.songList),
      });
    }
  }

  filterSongs(songs) {
    return songs.filter((song) =>
      this.state.genreFilterName === ""
        ? true
        : song.genre === this.state.genreFilterName
    );
  }

  getFilterGenre(genreName) {
    this.setState({
      genreFilterName: genreName,
    });
  }

  deleteSongHandler() {
    const lastSong = this.state.filteredList.at(-1);
    // если осталась только одна песня и мы её удаляем,
    // то сбрасываем состояние фильтра
    if (this.state.filteredList.length === 1) {
      this.setState({
        genreFilterName: "",
      });
    }
    // вызываем верхнеуровневую функцию удаления песни
    this.props.deleteSongById(lastSong.id);
  }

  render() {
    return (
      <div className="song-list-smart">
        <div className="song-list-smart__control_container">
          <DeleteSongButton
            isDisabled={this.state.filteredList.length < 1}
            onClick={this.deleteSongHandler.bind(this)}
          />
          <SongListFilter
            availableGenres={Array.from(
              new Set(this.props.songList.map((song) => song.genre)).values()
            )}
            getFilterGenre={this.getFilterGenre.bind(this)}
          />
        </div>

        <SongList songList={this.state.filteredList} />
      </div>
    );
  }
}

export default SongListSmart;
