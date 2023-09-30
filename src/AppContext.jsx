import React from "react";

import { useMovies } from "./hooks/useMovies";

export const AppContext = React.createContext(null);

export const AppContextProvider = (props) => {  
  const [displayedMovie, setDisplayedMovie] = React.useState(null);
  const [points, setPoints] = React.useState(0);

  const movies = useMovies();

  function isMovieNameCorrect(movieName) {
    const inputName = movieName.trim().toLowerCase();
    movieName = displayedMovie.name.toLowerCase(); 
    return movieName === inputName;
  }

  function handleCorrectMovie() {
    setPoints((prevPoints) => prevPoints + 1);
    movies.deleteMovie(displayedMovie.name);
    setDisplayedMovie(movies.getMovie());
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(isMovieNameCorrect(e.target[0].value));

    if (displayedMovie && isMovieNameCorrect(e.target[0].value)) {
      handleCorrectMovie();
    }

    e.target[0].value = "";
  }

  //? add displayed movie flag.
  React.useEffect(() => {
    setDisplayedMovie(movies.getMovie());
  }, []);

  const valueObj = {
    displayedMovie,
    handleSubmit,
    points,
  };

  return (
    <AppContext.Provider value={valueObj}>
      {props.children}
    </AppContext.Provider>
  );
}
