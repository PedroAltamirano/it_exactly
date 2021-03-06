import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../services/pokemonServices";
import { UpperFirst } from "../utils/strings";

const Pokemon = () => {
  const { name } = useParams();
  const { isLoading, data } = useQuery(["pokemon", name], () =>
    getPokemonByName(name || "")
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col m-4 gap-4">
      <div className="flex">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <img src={data?.sprites.front_default} alt={data?.name} />
          <h1>{UpperFirst(data?.name || "")}</h1>
        </div>
        <div>
          <p>Height: {data?.height}</p>
          <p>Weight: {data?.weight}</p>
          <p>Specie: {data?.species.name}</p>
          <p>Experience: {data?.base_experience}</p>
        </div>
      </div>
      <div>
        <h4>Types</h4>
        <div className="flex gap-4 flex-wrap">
          {data?.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </div>
      </div>
      <div>
        <h4>Stats</h4>
        <div className="flex gap-4 flex-wrap">
          {data?.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </div>
      </div>
      <div>
        <h4>Abilities</h4>
        <div className="flex gap-4 flex-wrap">
          {data?.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </div>
      </div>
      <div>
        <h4>Moves</h4>
        <div className="flex gap-4 flex-wrap">
          {data?.moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
