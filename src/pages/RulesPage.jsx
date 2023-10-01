import React from "react";

import { AppContext } from "../AppContext";

export const RulesPage = () => {
  const ctx = React.useContext(AppContext);

  return (
    <>
      <div id="top-bar"/>
      
      <div id="content-box">
        <p>Reglas</p>
      </div>

      <div id="bottom-bar">
        <button onClick={ctx.startGame}>
          Empezar
        </button>
      </div>
    </>
  )
}