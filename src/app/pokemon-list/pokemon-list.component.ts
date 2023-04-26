import { Component } from '@angular/core';
import { Pokemon } from 'src/model/pokemon';
import { Type } from 'src/model/Type';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})

export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venusaur',
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 4,
      name: 'Charmander',
      types: [
        Type.Fire
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      number: 5,
      name: 'Charmeleon',
      types: [
        Type.Fire
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      number: 6,
      name: 'Charizard',
      types: [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      number: 7,
      name: 'Squirtle',
      types: [
        Type.Water
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
      number: 8,
      name: 'Wartortle',
      types: [
        Type.Water
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
      number: 9,
      name: 'Blastoise',
      types: [
        Type.Water
      ]
    },
  ];

  constructor(
    public pokemonService: PokemonService
  ){}
}
