import { API_HOST } from "../config";
import { IPokemon, IPokemons } from "../interfaces/pokemon";

export const getPokemons = async (): Promise<IPokemons> => {
  const res = await fetch(`${API_HOST}/pokemon`);
  const data = await res.json();
  return data;
};

export const getPokemonByName = async (name: string): Promise<IPokemon> => {
  const res = await fetch(`${API_HOST}/pokemon/${name}`);
  const data = await res.json();
  return data;
};
