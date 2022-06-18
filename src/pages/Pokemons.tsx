import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getPokemons, getPokemonByName } from "../services/pokemonServices";
import { UpperFirst } from "../utils/strings";

interface IItemProps {
  name: string;
}

const Item: React.FC<IItemProps> = ({ name }) => {
  const { isLoading, data } = useQuery(["pokemon", name], () =>
    getPokemonByName(name)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Link to={name}>
      <div className="flex flex-col justify-center bg-gray-100 rounded-md p-4">
        <img src={data?.sprites?.front_default} alt={name} />
        <h4>{UpperFirst(name)}</h4>
        <h6>Abilities: {data?.abilities.length}</h6>
      </div>
    </Link>
  );
};

const Pokemons = () => {
  const { isLoading, data } = useQuery("pokemons", getPokemons);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data?.results?.map((pokemon: any) => (
        <Item name={pokemon.name} />
      ))}
    </div>
  );
};

export default Pokemons;
