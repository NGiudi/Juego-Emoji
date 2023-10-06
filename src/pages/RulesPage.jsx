import React from "react";

import { AppContext } from "../AppContext";

export const RulesPage = () => {
  const ctx = React.useContext(AppContext);

  return (
    <>
      <div className="layout--top-bar" />
      
      <div className="layout--content-box">
        <ol className="rules-box">
          <li>
            El juego consiste en una serie de rondas en las que se mostrará un conjunto de emojis 
            que representan una película específica.
          </li>

          <li>
            Se selecciona, al azar, una película de una lista predefinida.
          </li>

          <li>
            Se muestra en pantalla los emojis y los jugadores tienen 2 minutos para adivinar de qué
            película se trata.
          </li>

          <li>
            Escribir sus respuestas en el input de la barra inferior y apretar en el botón "Enviar".
          </li>

          <li>
            Los jugadores pueden hacer la cantidad de intentos que deseen dentro del tiempo dado.
          </li>
          
          <li>
            Caso el usuario no adivine la película y finalice los 2 minutos, se reemplaza el botón de
            enviar por el botón de "Siguiente" para seguir jugando.
          </li>
          
          <li>
            Al adivinar correctamente la película, el usuario recibirá un punto. El usuario debe apretar
            en el botón "Siguiente" para ver la siguiente película.
          </li>
        </ol>
      </div>

      <div className="layout--bottom-bar">
        <button onClick={ctx.startGame}>
          Empezar
        </button>
      </div>
    </>
  )
}