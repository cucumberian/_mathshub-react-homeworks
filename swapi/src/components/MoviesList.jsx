import React from 'react';

import Movie from './Movie';
import './MoviesList.css';

function MovieList({ movies }) {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
}

export default MovieList;
