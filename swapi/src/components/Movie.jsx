/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import MovieContext from "../context/movie-context";

import "./Movie.css";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie">
        <AiFillDelete
          className="movie-delete_icon"
          onClick={() => {
            this.context.deleteMovieHandler(this.props.id);
          }}
        />
        <li>
          <h2>{this.props.title}</h2>
          <h3>{this.props.releaseDate}</h3>
          <p>{this.props.openingText}</p>
        </li>
      </div>
    );
  }
}

Movie.contextType = MovieContext;

export default React.memo(Movie);
