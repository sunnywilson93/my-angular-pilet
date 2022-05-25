import { Component, Inject, VERSION } from '@angular/core';
import { Link } from 'react-router-dom';
import { baseRoute } from './app/constants';

@Component({
  template: `
    <div class="teaser">
      <h3>v12 (1): {{ counter }}</h3>
      <button (click)="increment()">Increment</button>
    </div>
  `
})
export class Tile {
  public counter = 0;
  public version = VERSION.full;

  constructor(@Inject('piral') piral: any) {
    console.log('Tile rendered', piral.meta);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  navigate() {
    window.location.replace('')
  }
}
