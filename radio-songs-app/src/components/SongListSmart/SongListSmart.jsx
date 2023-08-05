import React, { useState } from "react";
import SongList from "../SongList/SongList";
import SongListFilter from "../SongListFilter/SongListFilter";

function SongListSmart({ songList }) {
  console.log("SongListSmart:", songList);
  const [filteredList, setFilteredList] = useState(songList);

  const [isFilter, setIsFilter] = useState(false);
  const getFilterGenre = (genreName) => {
    if (genreName === "") {
      setIsFilter(false);
    } else {
      setIsFilter(true);
    }
    console.log("filter by genre", genreName);
    setFilteredList(songList.filter((song) => song.genre === genreName));
  };

  return (
    <>
      <SongListFilter
        availableGenres={Array.from(
          new Set(songList.map((song) => song.genre)).values()
        )}
        getFilterGenre={getFilterGenre}
      />
      {isFilter ? (
        <SongList songList={filteredList} />
      ) : (
        <SongList songList={songList} />
      )}
      {/* <DeleteSongButton /> */}
    </>
  );
}

export default SongListSmart;
