import React from "react";

import { generateNumber } from "../utils/numbers";

import { MOVIES } from "../assets/constants";

export const useMovies = () => { 
  const movies = React.useRef(MOVIES);

  function deleteMovie(movieName) {
    const movieIndex = movies.current.findIndex((movie) => movie.name === movieName);

    if (movieIndex !== -1){
      movies.current.splice(movieIndex, 1);
    }
  }

  function getMovie() {
    if (movies.current.length > 0) {
      const movieIdx = generateNumber(0, movies.current.length);
      const movie = movies.current[movieIdx];
      return movie;
    }

    return null;
  }

  return {
    deleteMovie,
    getMovie,
  };
}
