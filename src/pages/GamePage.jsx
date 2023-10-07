import React from "react";

import { AppContext } from "../AppContext";

import { TeamCard } from "../components";

export const GamePage = () => {
  const ctx = React.useContext (AppContext);

  return (
    <>
      <div className="layout--top-bar">
        <TeamCard />

        <div id="timer-box">
          {ctx.time}
        </div>
      </div>
      
      <div className="layout--content-box">
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

      <div className="layout--bottom-bar">
        <input
          autoFocus
          className="input-error"
          disabled={ctx.isTimeFinished}
          placeholder="Ingrese en nombre de la película..."
          onChange={ctx.handleInputChange}
          style={ctx.isError ? { borderColor: "red" } : {}}
          value={ctx.input}
        />

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
