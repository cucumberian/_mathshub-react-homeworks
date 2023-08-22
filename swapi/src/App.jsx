/* eslint-disable react/button-has-type */
import React from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const dummyMovies = [
    {
      id: 1,
      title: "Какой-то фильмец",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Какой-то фильмец 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  const firebase_url =
    "https://react-swapi-mathshub-default-rtdb.europe-west1.firebasedatabase.app/movies.json";

  const url = "https://swapi.dev/api/films/";

  const fetchMoviesHandler = React.useCallback(async () => {
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch(firebase_url);
      console.log("response =", response);
      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }
      const data = await response.json();

      // const transformedMovies = data.results.map((movie) => ({
      //   id: movie.episode_id,
      //   title: movie.title,
      //   openingText: movie.opening_crawl,
      //   releaseData: movie.releaseData,
      // }));

      const loadedMovies = [];
      Object.keys(data).forEach((key) => {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      });

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
      console.log("err.message = ", err.message);
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Не найдены фильмы</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>error</p>;
  }

  if (isLoading) {
    content = <p>загрузка</p>;
  }

  const addMovieHandler = React.useCallback(async (movie) => {
    const response = await fetch(firebase_url, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    console.log("movie =", movie);
  }, []);

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Загрузить фильмы</button>
      </section>
      <section>
        {content}
        {/* {isLoading && <p>Загрузка...</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length > 0 && !error && (
          <MoviesList movies={movies} />
        )}
        {!isLoading && movies.length === 0 && !error && <p>Пока нет фильмов</p>} */}
      </section>
    </>
  );
}

export default App;
