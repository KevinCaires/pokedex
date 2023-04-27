import { Type } from './Type';

export interface Pokemon{
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function customPokeImg(pokemon: Pokemon): string{
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}

export function getPokemonNumber(pokemon: Pokemon): string{
  return leadingZero(pokemon.number);
}

function leadingZero(pokeNum: number): string{
  let s = String(pokeNum);

  while (s.length < (3 || 2)){
    s = '0' + s;
  }

  return s
}
