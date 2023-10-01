import React from "react";

import { AppContext } from "./AppContext";

import { GamePage } from "./pages/GamePage";
import { RulesPage } from "./pages/RulesPage";

import "./styles/index.css";

export const App = () => {
  const ctx = React.useContext(AppContext);

  const pages = {
    game: <GamePage />,
    rules: <RulesPage />,
  }

  return pages[ctx.page];
};