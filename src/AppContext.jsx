import React from "react";

import { useMovies } from "./hooks/useMovies";
import { useTimer } from "./hooks/useTimer";

import { OPTION_INTERVAL } from "./assets/constants";

export const AppContext = React.createContext(null);

export const AppContextProvider = (props) => {  
  const [displayedMovie, setDisplayedMovie] = React.useState(null);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [page, setPage] = React.useState("rules");
  const [points, setPoints] = React.useState(0);
  const [input, setInput] = React.useState("");

  const timer = useTimer(OPTION_INTERVAL);
  const movies = useMovies();

  const getMovie = () => {
    const movie = movies.getMovie();

    if (movie) {
      
      movies.deleteMovie(movie.name); //? delete current movie of the list.
      setDisplayedMovie(movie);       //? show new movie. 
      timer.start();                  //? start timer.
    } else {
      setDisplayedMovie(null);
      setIsGameOver(true);        //? game over flag.
      timer.stop();
    }
  }

  const isMovieNameCorrect = (movieName) => {
    const inputName = movieName.trim().toLowerCase();
    movieName = displayedMovie.name.toLowerCase(); 
    return movieName === inputName;
  }

  const handleCorrectMovie = () => {
    setPoints((prevPoints) => prevPoints + 1);  //? add point.
    getMovie();                                 //? get new movie.
  }

  const valueObj = {
    displayedMovie,
    isGameOver,
    input,
    isError,
    isTimeFinished: timer.isFinished,
    page,
    points,
    time: timer.time,
    handleInputChange: (e) => {
      setInput(e.target.value);
    },
    handleNextMovie: () => {
      setInput(""); //? clear input content.
      getMovie();   //? get new movie.
    },
    restartGame: () => {
      //? clear values.
      movies.restartMovies();
      setIsGameOver(false);
      setPoints(0);

      //? init game.
      getMovie();
    },
    startGame: () => {
      getMovie();       //? init game.
      setPage("game");  //? change content.
    },
    validateInputMovie: () => {
      if (!timer.isFinished && isMovieNameCorrect(input)) {
        handleCorrectMovie();
        setError(false);
      } else {
        setError(true);
      }
      
      setInput(""); //? clear input content.
    },
  };

  return (
    <AppContext.Provider value={valueObj}>
      {props.children}
    </AppContext.Provider>
  );
}
