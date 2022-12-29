import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `Count: {{ count }}`,
})
export class AppCounter {
  count: number = 0;

  incCount() {
    this.count++;
  }

  decCount() {
    this.count--;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h1 class="mb-4">App Component</h1>

    <div class="flex gap-4 items-center">
      <h3 class="text-gray-600">Counter One</h3>
      <button class="p-2 border" (click)="counter1.incCount()">INC +</button>
      <button class="p-2 border" (click)="counter1.decCount()">DEC -</button>
      <app-counter #counter1></app-counter>
    </div>

    <div class="flex gap-4 items-center mt-4">
      <h3 class="text-gray-600">Counter Two</h3>
      <button class="p-2 border" (click)="counter2.incCount()">INC +</button>
      <button class="p-2 border" (click)="counter2.decCount()">DEC -</button>
      <app-counter #counter2></app-counter>
    </div>

    <h3 class="font-bold text-purple-700">
      {{
        counter2.count > counter1.count
          ? 'Counter Two  > Counter One'
          : counter2.count === counter1.count
          ? 'Two Counters are equal'
          : 'Counter Two < Counter One'
      }}
    </h3>
  `,
})
export class AppComponent {}
