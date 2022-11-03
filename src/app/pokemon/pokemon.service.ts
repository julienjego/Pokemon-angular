import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable()
export class PokemonService {
    //injection de dépendances du HttpClient
    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<Pokemon[]> {
        // return POKEMONS;

        // retourne une requête htttp
        return this.http.get<Pokemon[]>("api/pokemons").pipe(
            tap((response) => this.log(response)), // tap est un console.log
            catchError((error) => this.handleError(error, []))
        );
    }

    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        // return POKEMONS.find((pokemon) => pokemon.id === pokemonId);

        // cette fois-ci la requête retourne un seul pokémon
        return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => this.log(response)), // tap est un console.log
            catchError((error) => this.handleError(error, undefined))
        );
    }

    // fonction pour refactoriser les log
    private log(response: Pokemon[] | Pokemon | undefined) {
        console.table(response);
    }

    //fonction pour refactoriser les log d'erreurs
    private handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue);
    }

    getPokemonTypeList(): string[] {
        return [
            "Plante",
            "Feu",
            "Eau",
            "Insecte",
            "Normal",
            "Electrick",
            "Poison",
            "Fée",
            "Vol",
            "Combat",
            "Psy",
        ];
    }
}
