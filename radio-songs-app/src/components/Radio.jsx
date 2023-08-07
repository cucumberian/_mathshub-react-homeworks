import React, { useState } from "react";
import PostSongForm from "./PostSongForm/PostSongForm";
import SongList from "./SongList/SongList";
import Player from "./Player/Player";

function Radio() {
  const files = [];

  const [fileList, setFileList] = useState(files);
  const [playedFile, setPlayedFile] = useState({});

  const addFileHandler = (file) => {
    console.log("got file");
    setFileList((prevList) => [...prevList, file]);
  };

  const setPlayingHandle = (file_data) => {
    console.log("set player to", file_data);
    setPlayedFile(fileList.at(file_data.index));
  };

  return (
    <div>
      <PostSongForm addFile={addFileHandler} />
      <SongList files={fileList} setPlaying={setPlayingHandle} />
      <Player fileData={playedFile} />
    </div>
  );
}

export default Radio;
