import React, { createContext } from "react";

import { generateNumber } from "./utils/numbers";

import { FILMS } from "./assets/constants";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {  
  const films = React.useRef(FILMS);

  const [isEmptyFilms, setIsEmptyFilms] = React.useState(false);
  const [points, setPoints] = React.useState(0);
  const [selectedFilm, setSelectedFilm]  = React.useState(null);

  function isCorrectFilm(value) {
    const filmName = selectedFilm.name.toLowerCase(); 
    const inputName = value.trim().toLowerCase();
    return filmName === inputName;
  }

  function setMoviesToShow() {
    const isMoviesToShow = films.current.some((f) => !f.displayed);
    setIsEmptyFilms(!isMoviesToShow);
    return isMoviesToShow;
  }

  function setFilmDisplayed() {
    const film = films.current.find((f) => selectedFilm.name === f.name);
    film.displayed = true;
  }

  function handleShowFilm() {
    const filmIdx = generateNumber(0, films.current.length);
    const film = films.current[filmIdx];
    
    if (film.displayed) {
      handleShowFilm();
    } else {
      setSelectedFilm(film);
    }
  }

  function handleCorrectFilm() {
    setFilmDisplayed();
    setPoints((prevPoints) => prevPoints + 1);
    
    if (setMoviesToShow()) {
      handleShowFilm();
    } else {
      setSelectedFilm(null);
    }
  }

  /* functionalities */
  function handleSubmit(e) {
    e.preventDefault();

    if (selectedFilm && isCorrectFilm(e.target[0].value)) {
      handleCorrectFilm();
    }

    e.target[0].value = "";
  }

  //? add displayed movie flag.
  React.useEffect(() => {
    for (let i = 0; i < FILMS.length; i++) {
      films.current[i].displayed = false;
    }

    handleShowFilm();
  }, []);

  const valueObj = {
    films: films.current,
    handleSubmit,
    isEmptyFilms,
    points,
    selectedFilm,
  };

  return (
    <AppContext.Provider value={valueObj}>
      {props.children}
    </AppContext.Provider>
  );
}
