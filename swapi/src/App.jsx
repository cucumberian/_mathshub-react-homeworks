/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

import "./App.css";
import MovieContext from "./context/movie-context";

class App extends React.Component {
  render() {
    return (
      <>
        <section>
          <AddMovie onAddMovie={this.context.addMovieHandler} />
        </section>
        <section>
          <button onClick={this.context.loadMoviesHandler}>
            Загрузить фильмы
          </button>
        </section>
        <section>
          <MoviesList movies={this.context.movies} />
        </section>
      </>
    );
  }
}

App.contextType = MovieContext;

export default App;
