import React from "react";
import SelectGenre from "../SelectGenre/SelectGenre";
import "./SongPostForm.css";

function SongPostForm({ availableGenres, postSongHandler }) {
  function formSubmit(e) {
    e.preventDefault();
    // e.stopPropagation();
    const formData = new FormData(e.target);
    const songData = Object.fromEntries(formData.entries());
    postSongHandler(songData);
  }
  return (
    <form className="song-post-form" onSubmit={formSubmit}>
      <input name="name" type="text" placeholder="Название песни" />
      <input name="artist" type="text" placeholder="Исполнитель" />
      <SelectGenre availableGenres={availableGenres} genreHandler={() => {}} />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SongPostForm;
