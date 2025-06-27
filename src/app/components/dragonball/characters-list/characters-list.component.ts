import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
