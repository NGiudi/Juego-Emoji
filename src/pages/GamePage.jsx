import React from "react";

import { AppContext } from "../AppContext";

import { TeamCard } from "../components";

export const GamePage = () => {
  const ctx = React.useContext (AppContext);

  return (
    <>
      <div id="top-bar">
        <TeamCard />

        <div id="timer-box">
          {ctx.time}
        </div>
      </div>
      
      <div id="content-box">
        {ctx.isGameOver ? (
          <p>No hay más películas</p>
        ) : ctx.displayedMovie.emojis.map((emoji, idx) => {
          return (
            <div className="box-emoji" key={`${ctx.displayedMovie.name}-emoji-${idx}`}>
              <img src={emoji} />
            </div>
          );
        })}
      </div>

      <div id="bottom-bar">
        <input autoFocus placeholder="Ingrese en nombre de la película..." onChange={ctx.handleInputChange} value={ctx.input} />

        {ctx.isGameOver ? (
          <button onClick={ctx.restartGame}>
            Reiniciar
          </button>
        ) : ctx.isTimeFinished ? (
          <button onClick={ctx.handleNextMovie}>
            Siguiente
          </button>
        ) : (
          <button onClick={ctx.validateInputMovie}>
            Enviar
          </button>
        )}
      </div>
    </>
  );
}
