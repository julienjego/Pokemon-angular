import { PokemonService } from "./../pokemon.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon.model";

@Component({
    selector: "app-list-pokemon",
    templateUrl: "./list-pokemon.component.html",
    styleUrls: ["list-pokemon.component.css"],
})
export class ListPokemonComponent implements OnInit {
    pokemonsList: Pokemon[] | undefined;

    constructor(
        private router: Router,
        private PokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this.pokemonsList = this.PokemonService.getPokemonList();
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.id]);
    }
}
