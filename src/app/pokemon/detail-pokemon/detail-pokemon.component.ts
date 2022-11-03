import { Pokemon } from "./../pokemon.model";
import { PokemonService } from "./../pokemon.service";
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
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

        if (pokemonId) {
            this.pokemonService
                .getPokemonById(+pokemonId)
                .subscribe((pokemon) => (this.pokemon = pokemon));
        }
    }

    goToPokeList() {
        this.router.navigate(["/pokemons"]);
    }

    goToEditPokemon(pokemon: Pokemon) {
        this.router.navigate(["/edit/pokemon", pokemon.id]);
    }

    deletePokemon(pokemon: Pokemon) {
        this.pokemonService
            .deletePokemonById(pokemon.id)
            .subscribe(() => this.goToPokeList());
    }
}
