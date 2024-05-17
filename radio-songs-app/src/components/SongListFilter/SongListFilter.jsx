import React from "react";
import SelectGenre from "../SelectGenre/SelectGenre";

function SongListFilter({ availableGenres, getFilterGenre }) {
  return (
    <div>
      <SelectGenre
        availableGenres={availableGenres}
        genreHandler={getFilterGenre}
        dummyName="Фильтровать по жанру"
        isRequired={false}
      />
    </div>
  );
}

export default SongListFilter;
