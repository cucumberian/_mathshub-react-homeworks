import React, { useState } from "react";
import Progress from "../Progress/Progress";

function PostSongForm({ addFile }) {
  const [inputValue, setInputValue] = useState("");
  const [progressValue, setProgressValue] = useState(0);

  const fr = new FileReader();
  fr.addEventListener("load", (e) => {
    console.log("loaded", e);
    console.log("fr =", fr);
    addFile(fr);
    setInputValue("");
  });

  fr.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      setProgressValue((e.loaded / e.total) * 100);
    }
  });

  const addFileHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("formSubmit");
    const formData = new FormData(e.target);
    const fileObject = formData.get("file");
    console.log("fileObject =", fileObject);
    fr.filename = fileObject.name;
    fr.id = Math.random().toString();
    fr.readAsDataURL(fileObject);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={addFileHandler}>
        <input
          type="file"
          id="file"
          accept="audio/*"
          name="file"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></input>
        <button type="submit">Отправить</button>
      </form>
      <Progress progressValue={progressValue} />
    </>
  );
}

export default PostSongForm;
