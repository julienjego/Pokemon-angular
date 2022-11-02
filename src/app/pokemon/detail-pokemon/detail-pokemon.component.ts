import { PokemonService } from "./../pokemon.service";
import { Pokemon } from "../pokemon.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-detail-pokemon",
    templateUrl: "./detail-pokemon.component.html",
    styles: [],
})
export class DetailPokemonComponent implements OnInit {
    pokemonList: Pokemon[] | undefined;
    pokemon: Pokemon | undefined;

    // Injection de dépendances dans le constructeur
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private PokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

        if (pokemonId) {
            this.pokemon = this.PokemonService.getPokemonById(+pokemonId);
        }
    }

    goToPokeList() {
        this.router.navigate(["/pokemons"]);
    }
}
