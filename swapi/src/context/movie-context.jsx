/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

const MovieContext = React.createContext({});

class MovieContextProvider extends React.Component {
  firebase_url =
    "https://react-swapi-mathshub-default-rtdb.europe-west1.firebasedatabase.app/movies";

  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    console.log(`MovieContextProvider.DidMount`);
    await this.loadMoviesHandler();
  }

  async loadMoviesHandler() {
    try {
      const response = await fetch(`${this.firebase_url}.json`);
      const json = await response.json();

      const movieList = Object.entries(json).reduce((acc, [key, value]) => {
        acc.push({ id: key, ...value });
        return acc;
      }, []);
      this.setState({
        movies: movieList,
      });
    } catch (error) {
      console.log("error: ", error.message);
    }
  }

  async addMovieHandler(movie) {
    console.log("onAddMovie.movie =", movie);

    const response = await fetch(`${this.firebase_url}.json`, {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(movie),
    });

    const json = await response.json();

    const newMovie = {
      id: json.name,
      ...movie,
    };

    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  async deleteMovieHandler(movieId) {
    console.log("deleteMovieHandler.movieId =", movieId);
    this.setState((prevState) => ({
      movies: prevState.movies.filter((movie) => movie.id !== movieId),
    }));

    const response = await fetch(`${this.firebase_url}/${movieId}.json`, {
      method: "DELETE",
    });
    console.log("Delete.response =", response);
    const json = await response.json();
    console.log("Delete.json =", json);
  }

  render() {
    return (
      <MovieContext.Provider
        value={{
          movies: this.state.movies,
          addMovieHandler: this.addMovieHandler.bind(this),
          deleteMovieHandler: this.deleteMovieHandler.bind(this),
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

MovieContextProvider.contextType = MovieContext;

export default MovieContext;
export { MovieContextProvider };
