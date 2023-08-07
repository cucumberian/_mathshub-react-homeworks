import React from "react";
import "./FileItem.css";

function FileItem({ file, setPlaying, fileIndex }) {
  return (
    <p
      className="file-item"
      onClick={(e) => {
        setPlaying({ index: fileIndex });
      }}
    >
      {file.filename}
    </p>
  );
}

export default FileItem;
