import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonNumber, customPokeImg } from 'src/model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  getPokemonNumber = getPokemonNumber;
  getPokemonImage = customPokeImg;
}
