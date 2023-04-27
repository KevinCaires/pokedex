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
  constructor(
    public pokemonService: PokemonService
  ){}
}
