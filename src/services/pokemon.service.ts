import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/model/pokemon';
import { ReplaySubject, map, mergeMap, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ){
    const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
    this.httpClient.get<any>(baseUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((res: any) => this.httpClient.get(res.url))
        )
      }),
      mergeMap(value => value)
    ).subscribe((result: any) => {
      this.pokemons[result.id] = {
        number: result.id,
        name: result.name,
        image: result.sprites.front_default,
        types: result.types.map((t: any) => t.type.name)
      };
    });
  }
}
