import React from "react";
import { Route, Routes } from "react-router-dom";

import Pokedex from "./components/Pokedex";

import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Pokedex>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path=":name" element={<Pokemon />} />
      </Routes>
    </Pokedex>
  );
}

export default App;
