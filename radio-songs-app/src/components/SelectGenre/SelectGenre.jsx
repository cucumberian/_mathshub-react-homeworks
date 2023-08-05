import React, { useState } from "react";

function SelectGenre({
  availableGenres,
  genreHandler,
  dummyName = "Выберите жанр",
}) {
  const [value, setValue] = useState("");
  return (
    <select
      name="genre"
      onChange={(e) => {
        genreHandler(e.target.value);
        setValue(e.target.value);
      }}
      value={value}
    >
      <option key="2" value="">
        {dummyName}
      </option>
      {availableGenres.map((genre) => (
        <option key={Math.random().toString()} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default SelectGenre;
