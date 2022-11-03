import {
    debounceTime,
    distinctUntilChanged,
    Observable,
    Subject,
    switchMap,
} from "rxjs";
import { Pokemon } from "./../pokemon.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-search-pokemon",
    templateUrl: "./search-pokemon.component.html",
    styles: [],
})
export class SearchPokemonComponent implements OnInit {
    // Flux de données pour récupérer les caractères recherchés
    searchTerms = new Subject<string>();
    // Flux de pokémons que l'on va récupérer
    pokemons$!: Observable<Pokemon[]>;

    constructor(
        private router: Router,
        private pokemonservice: PokemonService
    ) {}

    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
            debounceTime(300), // timeout sur les requêtes pour éviter de taper tout le temps le serveur
            distinctUntilChanged(), // n'envoie pas de requêtes similaires au serveur
            switchMap((term) => this.pokemonservice.searchPokemonList(term))
        );
    }

    search(term: string) {
        this.searchTerms.next(term);
    }

    goToDetail(pokemon: Pokemon) {
        const link = ["/pokemon", pokemon.id];
        this.router.navigate(link);
    }
}
