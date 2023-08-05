import React, { useState } from "react";
import SongList from "../SongList/SongList";
import SongListFilter from "../SongListFilter/SongListFilter";

function SongListSmart({ songList }) {
  console.log("SongListSmart:", songList);
  // const [filteredList, setFilteredList] = useState(songList);?
  // Так не работает, при измененении songList сверху не пересчитывается filterdList
  const [genreFilterName, setGenreFilterName] = useState("");

  const filteredList = songList.filter((song) =>
    genreFilterName === "" ? true : song.genre === genreFilterName
  );

  const getFilterGenre = (genreName) => {
    setGenreFilterName(genreName);
    console.log("filter by genre", genreName);
  };

  return (
    <>
      <SongListFilter
        availableGenres={Array.from(
          new Set(songList.map((song) => song.genre)).values()
        )}
        getFilterGenre={getFilterGenre}
      />

      <SongList songList={filteredList} />

      {/* <DeleteSongButton /> */}
    </>
  );
}

export default SongListSmart;
