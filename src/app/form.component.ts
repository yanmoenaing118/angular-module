import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <div [class]="'mt-5 p-5 shadow-md bg-green-50'">
      <label for="color">Favorite Color:</label>
      <input
        type="text"
        class="border ml-3 py-1 px-3"
        [formControl]="favoriteColorControl"
      />
      <button (click)="resetFavColor()" class="ml-3 p-2 shadow-sm bg-indigo-400 text-neutral-50 rounded">
        Reset
      </button>
      <div>{{ favoriteColorControl.value }}</div>
    </div>
  `,
})
export class ReactiveFormComponent {
  favoriteColorControl = new FormControl('');

  resetFavColor() {
    this.favoriteColorControl.setValue('indigo');

  }
}
