import React from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import FilesList from "../FilesList/FilesList";
import FilesPostForm from "../FilesPostForm/FilesPostForm";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      playedFile: {},
    };
  }

  componentDidMount() {
    this.setState({
      fileList: this.props.initFiles,
      playedFile: {},
    });
  }

  addFileHandler(file) {
    this.setState((prevState) => ({
      fileList: [file, ...prevState.fileList],
    }));
  }

  setPlayingHandler(fileData) {
    this.setState({ playedFile: this.state.fileList.at(fileData.index) });
  }

  render() {
    return (
      <div className="radio-container">
        <FilesPostForm addFile={this.addFileHandler.bind(this)} />
        <FilesList
          files={this.state.fileList}
          setPlaying={this.setPlayingHandler.bind(this)}
        />
        <AudioPlayer fileData={this.state.playedFile} />
      </div>
    );
  }
}

export default Player;
