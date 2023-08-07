import React, { useState } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import FilesList from "../FilesList/FilesList";
import FilesPostForm from "../FilesPostForm/FilesPostForm";

function Player({ initFiles }) {
  const [fileList, setFileList] = useState(initFiles);
  const [playedFile, setPlayedFile] = useState({});

  const addFileHandler = (file) => {
    setFileList((prevList) => [file, ...prevList]);
  };

  const setPlayingHandler = (fileData) => {
    setPlayedFile(fileList.at(fileData.index));
  };

  return (
    <div className="radio-container">
      <FilesPostForm addFile={addFileHandler} />
      <FilesList files={fileList} setPlaying={setPlayingHandler} />
      <AudioPlayer fileData={playedFile} />
    </div>
  );
}

export default Player;
