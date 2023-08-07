import React from "react";
import FileItem from "../FileItem/FileItem";

function FilesList({ files, setPlaying }) {
  const setPlayingHandle = (data) => {
    setPlaying(data);
  };

  console.log(files);

  return (
    <div className="files-list">
      {files.map((file, index) => (
        <FileItem
          key={index}
          file={file}
          fileIndex={index}
          setPlaying={setPlayingHandle}
        />
      ))}
    </div>
  );
}

export default FilesList;
