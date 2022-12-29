import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <div>value: {{ counter }}</div> `,
})
export class CounterComponent {
  counter: number = 0;
  updateCounter(dir: any) {
    if (dir == '+') {
      this.counter++;
    } else {
      this.counter--;
    }
  }

  increaseBy(value: number) {
    this.counter = this.counter + value;
  }

  decreaseBy(value: number) {
    this.counter = this.counter - value;
  }
}

/**Parent App Component */
@Component({
  selector: 'app-root',
  template: `
    <button class="p-3 border" (click)="ch.updateCounter('+')">Increase</button>
    <button class="p-3 border" (click)="ch.updateCounter('-')">Decrease</button>
    <button class="p-3 border" (click)="ch.increaseBy(5)">Increase By 5</button>
    <button class="p-3 border" (click)="ch.decreaseBy(5)">Decrease By 5</button>
    <br /><br />
    <button class="p-3 border" (click)="ch2.updateCounter('+')">
      Increase
    </button>
    <button class="p-3 border" (click)="ch2.updateCounter('-')">
      Decrease
    </button>
    <button class="p-3 border" (click)="ch2.increaseBy(5)">
      Increase By 5
    </button>
    <button class="p-3 border" (click)="ch2.decreaseBy(5)">
      Decrease By 5
    </button>
    <br />

    <app-counter #ch></app-counter>
    <app-counter #ch2></app-counter>
    <div class="mt-10">
      <h3 class="text-lg font-bold">Counter One ch status</h3>
      <div
        *ngIf="ch.counter > 5"
        class="p-5 shadow-md bg-emerald-300 text-white"
      >
        The counter one is greater than 5
      </div>
      <div
        *ngIf="ch.counter < 0"
        class="p-5 shadow-md bg-purple-300 text-white"
      >
        The counter one is less than 0
      </div>
    </div>

    <div class="mt-10">
      <h3 class="text-lg font-bold">Counter Two ch2 Status</h3> 
      <div *ngIf="ch2.counter > 5" class="p-5 shadow-md bg-orange-300">The Counter ch2 is greater than 5</div>
      <div *ngIf="ch2.counter < 0" class="p-5 shadow-md bg-red-300">The Counter ch2 is less than 0</div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
