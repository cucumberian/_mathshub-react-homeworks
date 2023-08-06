import React, { useState } from "react";
import SongList from "../SongList/SongList";
import SongListFilter from "../SongListFilter/SongListFilter";
import DeleteSongButton from "../DeleteSongButton/DeleteSongButton";
import "./SongListSmart.css";

function SongListSmart({ songList, deleteSongById }) {
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

  const deleteSongHandler = () => {
    console.log("we need delete last song");
    const lastSong = filteredList.at(-1);
    console.log("song to delete:", lastSong);
    // если осталась только одна песня и мы её удаляем,
    // то сбрасываем состояние фильтра
    if (filteredList.length === 1) {
      setGenreFilterName("");
    }
    // вызываем верхнеуровневую функцию удаления песни
    deleteSongById(lastSong.id);
  };

  console.log("filteredList.length =", filteredList.length);

  return (
    <div className="song-list-smart">
      <SongListFilter
        availableGenres={Array.from(
          new Set(songList.map((song) => song.genre)).values()
        )}
        getFilterGenre={getFilterGenre}
      />

      <SongList songList={filteredList} />

      <DeleteSongButton
        isDisabled={filteredList.length < 1}
        onClick={deleteSongHandler}
      />
    </div>
  );
}

export default SongListSmart;
