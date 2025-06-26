import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.html',
  imports: [ UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Iroman');
  age = signal(45);

  heroDescription =computed(() => {
    return `${this.name()} is ${this.age()} years old.`;
  });

  capitalidezNamde = computed(() => {
    return this.name().toUpperCase();
  });


  changeHero(){
    this.name.set('Spiderman');
    this.age.set(30);
  }

  resetForm() {
    this.name.set('Iroman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }
}
