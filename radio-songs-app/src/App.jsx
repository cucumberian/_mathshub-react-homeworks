import React from "react";
import Radio from "./components/Radio";

import "./App.css";
import RadioHeader from "./components/RadioHeader/RadioHeader";

const DUMMY_SONG_LIST = [
  {
    id: 1,
    name: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Рок",
  },
  {
    id: 2,
    name: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Поп",
  },
  {
    id: 3,
    name: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "Поп",
  },
  {
    id: 4,
    name: "Rolling in the Deep",
    artist: "Adele",
    genre: "Блюз",
  },
  {
    id: 5,
    name: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Поп",
  },
];

const DUMMY_GENRE_LIST = [
  "Поп",
  "Рок",
  "Джаз",
  "Блюз",
  "Рэп",
  "HardBass",
  "DnB",
  "Электроника",
  "Кантри",
  "Регги",
  "Фолк",
  "Классика",
];

function App() {
  return (
    <div className="App">
      <RadioHeader />
      <Radio initSongs={DUMMY_SONG_LIST} availableGenres={DUMMY_GENRE_LIST} />
    </div>
  );
}

export default App;
