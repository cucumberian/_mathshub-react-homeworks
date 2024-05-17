import React, { useState } from "react";

function FilesPostForm({ addFile }) {
  const [progressValue, setProgressValue] = useState(0);

  const fr = new FileReader();

  fr.addEventListener("load", (e) => {
    addFile(fr);
  });

  const formSubmitHandler = (e) => {
    console.log("formPostHandler");
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.target);
    const fileObject = formData.get("file");
    fr.filename = fileObject.name;
    fr.id = Math.random().toString();
    fr.readAsDataURL(fileObject);
    e.target.reset();
  };

  return (
    <form className="song-post-form" action="" onSubmit={formSubmitHandler}>
      <input type="file" name="file"></input>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default FilesPostForm;
