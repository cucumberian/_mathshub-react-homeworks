import React from "react";
import "./FileItem.css";

class FileItem extends React.Component {
  render() {
    return (
      <p
        className="file-item"
        onClick={(e) => {
          this.props.setPlaying({ index: this.props.fileIndex });
        }}
      >
        {this.props.file.filename}
      </p>
    );
  }
}

export default FileItem;
