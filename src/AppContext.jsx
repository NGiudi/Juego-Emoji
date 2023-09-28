import React, { createContext } from "react";

import { generateNumber } from "./utils/numbers";

import { FILMS } from "./assets/constants";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {  
  const films = React.useRef(FILMS);

  const [selectedFilm, setSelectedFilm]  = React.useState(null);

  function noMoreFilms() {  
    return !films.current.some((f) => !f.displayed);
  }

  function handleShowFilm() {
    const filmIdx = generateNumber(0, films.current.length);
    setSelectedFilm(films.current[filmIdx]);
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
    selectedFilm,
  };

  return (
    <AppContext.Provider value={valueObj}>
      {props.children}
    </AppContext.Provider>
  );
}
