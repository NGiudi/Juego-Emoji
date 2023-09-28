import { useContext } from "react";

import { AppContext } from "./AppContext";

import { Input, TeamCard } from "./components";

import "./styles/index.css";

export const App = () => {
  const ctx = useContext (AppContext);

  return (
    <>
      <div id="top-bar">
        <TeamCard />
      </div>
      
      <div id="content-box">
        {ctx.selectedFilm && ctx.selectedFilm.emojis.map((emoji, idx) => {
          return (
            <div className="box-emoji" key={`${ctx.selectedFilm.name}-emoji-${idx}`}>
              <img src={emoji} />
            </div>
          );
        })}
      </div>

      <div id="bottom-bar">
        <Input />
      </div>
    </>
  );
};