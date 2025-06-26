import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }
  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(0);
  }
  decreaseBy(value: number){
    this.counter -= value;
  }
}
