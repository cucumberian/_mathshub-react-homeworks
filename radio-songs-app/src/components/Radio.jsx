import React, { useState } from "react";
import SongPostForm from "./SongPostForm/SongPostForm";
import SongListSmart from "./SongListSmart/SongListSmart";
import "./Radio.css";

function Radio({ initSongs, availableGenres }) {
  const [songList, setSongList] = useState(initSongs);
  const [lastId, setLastId] = useState(initSongs.at(-1).id + 1);

  const postSongHandler = (songData) => {
    console.log("postSongHandler songData=", songData);
    setLastId((prevValue) => prevValue + 1);
    setSongList((prevSongList) => {
      return [{ ...songData, id: lastId }, ...prevSongList];
    });
  };

  const deleteSongByIdHandler = (songId) => {
    setSongList((prevSongList) =>
      prevSongList.filter((song) => song.id !== songId)
    );
  };

  return (
    <div className="radio-container">
      <SongPostForm
        availableGenres={availableGenres}
        postSong={postSongHandler}
      />
      <SongListSmart
        songList={songList}
        deleteSongById={deleteSongByIdHandler}
      />
    </div>
  );
}

export default Radio;
