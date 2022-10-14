import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
    pokemonsList: Pokemon[] = POKEMONS;
    pokemonSelected: Pokemon | undefined;

    ngOnInit(): void {
        console.table(this.pokemonsList);
    }

    selectPokemon(pokemonId: string): void {
        const pokemon: Pokemon | undefined = this.pokemonsList.find(
            (pokemon) => pokemon.id === +pokemonId
        );

        if (pokemon) {
            console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
            this.pokemonSelected = pokemon;
        } else {
            console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
            this.pokemonSelected = pokemon;
        }
    }
}
