import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponet } from './components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponet],
  templateUrl: './app.html'
})
export class App {
  protected title = 'bases';
}
