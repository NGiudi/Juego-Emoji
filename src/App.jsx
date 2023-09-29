import { useContext } from "react";

import { AppContext } from "./AppContext";

import { TeamCard } from "./components";

import "./styles/index.css";

export const App = () => {
  const ctx = useContext (AppContext);

  return (
    <>
      <div id="top-bar">
        <TeamCard />
      </div>
      
      <div id="content-box">
        {ctx.isEmptyFilms ? (
          <p>No hay más películas</p>
        ) : ctx.selectedFilm && ctx.selectedFilm.emojis.map((emoji, idx) => {
          return (
            <div className="box-emoji" key={`${ctx.selectedFilm.name}-emoji-${idx}`}>
              <img src={emoji} />
            </div>
          );
        })}
      </div>

      <form id="bottom-bar" onSubmit={ctx.handleSubmit}>
        <input autoFocus placeholder="Ingrese en nombre de la película..." />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};