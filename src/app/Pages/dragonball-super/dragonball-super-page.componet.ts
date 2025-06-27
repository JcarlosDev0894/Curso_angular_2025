import { Component, inject, signal } from "@angular/core";
import { CharactersListComponent } from "../../components/dragonball/characters-list/characters-list.component";
import { Character } from "../../interfaces/character.interface";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";



@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharactersListComponent, CharacterAddComponent]
})

export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

}
