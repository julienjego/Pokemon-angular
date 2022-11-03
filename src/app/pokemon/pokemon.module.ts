import { PokemonService } from "./pokemon.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";

const pokemonRoutes: Routes = [
    { path: "edit/pokemon/:id", component: EditPokemonComponent },
    { path: "pokemons", component: ListPokemonComponent },
    { path: "pokemon/:id", component: DetailPokemonComponent },
];

@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        EditPokemonComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
    //injection du service pour les composants de 'pokemon'
    providers: [PokemonService],
})
export class PokemonModule {}
