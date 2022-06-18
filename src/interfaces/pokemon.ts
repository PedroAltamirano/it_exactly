interface IForms {
  name: string;
  url: string;
}

export interface IPokemons {
  count: number;
  next: string;
  previous: string;
  results: IForms[];
}

export interface IPokemon {
  abilities: IAbilities[];
  base_experience: number;
  forms: IForms[];
  game_indices: IGames[];
  height: number;
  held_items: [];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: [];
  species: IForms;
  sprites: ISprite;
  stats: IStat[];
  types: IType[];
  weight: number;
}

export interface IAbilities {
  ability: IForms;
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}

interface IGames {
  game_index: number;
  version: IForms[];
}

interface IMove {
  move: IForms;
  version_group_details: IVersionGroupDetails[];
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IForms;
  version_group: IForms;
}

interface ISprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface IStat {
  base_stat: number;
  effort: number;
}

interface IType {
  slot: number;
  type: IForms;
}
