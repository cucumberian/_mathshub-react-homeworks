import React, { useState } from "react";
import SongList from "../SongList/SongList";
import SongListFilter from "../SongListFilter/SongListFilter";
import DeleteSongButton from "../DeleteSongButton/DeleteSongButton";
import "./SongListSmart.css";

function SongListSmart({ songList, deleteSongById }) {
  // const [filteredList, setFilteredList] = useState(songList);?
  // Так не работает, при измененении songList сверху не пересчитывается filterdList
  const [genreFilterName, setGenreFilterName] = useState("");

  const filteredList = songList.filter((song) =>
    genreFilterName === "" ? true : song.genre === genreFilterName
  );

  const getFilterGenre = (genreName) => {
    setGenreFilterName(genreName);
  };

  const deleteSongHandler = () => {
    const lastSong = filteredList.at(-1);
    // если осталась только одна песня и мы её удаляем,
    // то сбрасываем состояние фильтра
    if (filteredList.length === 1) {
      setGenreFilterName("");
    }
    // вызываем верхнеуровневую функцию удаления песни
    deleteSongById(lastSong.id);
  };

  return (
    <div className="song-list-smart">
      <div className="song-list-smart__control_container">
        <DeleteSongButton
          isDisabled={filteredList.length < 1}
          onClick={deleteSongHandler}
        />
        <SongListFilter
          availableGenres={Array.from(
            new Set(songList.map((song) => song.genre)).values()
          )}
          getFilterGenre={getFilterGenre}
        />
      </div>

      <SongList songList={filteredList} />
    </div>
  );
}

export default SongListSmart;
