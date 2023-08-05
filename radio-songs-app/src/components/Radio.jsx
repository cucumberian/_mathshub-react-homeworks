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

  return (
    <div className="radio-container">
      <SongPostForm
        availableGenres={availableGenres}
        postSongHandler={postSongHandler}
      />
      <SongListSmart songList={songList} />
    </div>
  );
}

export default Radio;
