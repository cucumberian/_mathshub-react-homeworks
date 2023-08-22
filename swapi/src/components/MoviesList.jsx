/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

import Movie from "./Movie";
import "./MoviesList.css";

class MovieList extends React.Component {
  render() {
    return (
      <ul className="movies-list">
        {this.props.movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    );
  }
}

export default MovieList;
