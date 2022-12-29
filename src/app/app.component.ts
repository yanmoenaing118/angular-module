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

   <div class="flex gap-3">
   <button class="border p-2"  (click)="togglePurple()">Toggle Purple</button>
    <button  class="border p-2" (click)="toggleUpper()">Toggle Upper</button>
    <button  class="border p-2" (click)="toggleBg()">Toggle BG</button>
   </div>
  `,
})
export class AppComponent {
  isPurple: boolean = true;
  isUpper: boolean = true;
  isBgSlate: boolean = true;

  classes: Record<string, boolean> = {
    'text-purple-600': this.isPurple,
    uppercase: this.isUpper,
    'bg-slate-800': this.isBgSlate,
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
}
