import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/counter/counter-page.component';
import { HeroPageComponent } from './Pages/hero/hero-page.componet';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }

];
