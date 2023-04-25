import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  public leadingZero(pokeNum: number): string{
    let s = String(pokeNum);

    while (s.length < (3 || 2)){
      s = '0' + s;
    }
    return s
  }
}
