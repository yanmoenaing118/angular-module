import { Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({
  selector: 'pane',
})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngClass]="classes" style="transition: all .3s ease;">
      hello hi who are you
    </h1>

    <h1 [ngStyle]="styles">NgStyle Directive</h1>

    <div class="flex gap-3">
      <button class="border p-2" (click)="togglePurple()">Toggle Purple</button>
      <button class="border p-2" (click)="toggleUpper()">Toggle Upper</button>
      <button class="border p-2" (click)="toggleBg()">Toggle BG</button>
    </div>

    <div class="mt-8 border-t">
      <h1>NgModel</h1>

      <div>
        <h3 class="text-gray-800">Current item: {{ currentItem.name }}</h3>
        <h3 class="text-gray-800">Current AGE: {{ currentItem.age }}</h3>
        <div>
          <label for="name">[(ngModel)]</label>
          <input
            class="border"
            type="text"
            id="name"
            [(ngModel)]="currentItem.name"
          />
        </div>
        <div>
          <label for="name-ng-modle-change">(ngModelChange):</label>
          <input
            type="text"
            class="border"
            id="name-ng-modle-change"
            [ngModel]="currentItem.name"
            (ngModelChange)="setUppperCase($event)"
          />
        </div>
        <div>
          <label for="age">AGE</label>
          <input class="border" type="number" [(ngModel)]="currentItem.age" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPurple: boolean = true;
  isUpper: boolean = true;
  isBgSlate: boolean = true;

  isFontSm: boolean = false;
  isItalic: boolean = true;
  isBold: boolean = true;

  classes: Record<string, boolean> = {
    'text-purple-600': this.isPurple,
    uppercase: this.isUpper,
    'bg-slate-800': this.isBgSlate,
  };

  styles: Record<string, string> = {
    'font-size': this.isFontSm ? '12px' : '20px',
    'font-weight': this.isBold ? 'bold' : 'normal',
    'font-style': this.isItalic ? 'italic' : 'regular',
  };

  currentItem = {
    name: '',
    age: 0,
  };

  setClasses() {
    this.classes = {
      ...this.classes,
      'text-purple-600': this.isPurple,
      uppercase: this.isUpper,
      'bg-slate-800': this.isBgSlate,
    };
  }

  togglePurple() {
    this.isPurple = !this.isPurple;
    this.setClasses();
  }

  toggleUpper() {
    this.isUpper = !this.isUpper;
    this.setClasses();
  }

  toggleBg() {
    this.isBgSlate = !this.isBgSlate;
    this.setClasses();
  }

  setUppperCase(value: string) {
    this.currentItem.name = value.toUpperCase();
  }
}
