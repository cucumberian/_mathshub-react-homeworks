/* eslint-disable react/button-has-type */
import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Какой-то фильмец',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Какой-то фильмец 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <>
      <section>
        <button>Загрузить фильмы</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </>
  );
}

export default App;
