import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/model/pokemon';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons = new ReplaySubject<Pokemon[]>(1);

  constructor(
    private httpClient: HttpClient,
  ){
    const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
    this.httpClient.get(baseUrl).subscribe((data) => {
      console.log(data);
    });
  }
}
