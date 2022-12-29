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
    <h1 [ngClass]="classes" style="transition: all .3s ease;">hello hi who are you</h1>

    <button (click)="setClasses()">Toggle Classes</button>
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
    this.isPurple = !this.isPurple;
    this.isUpper = !this.isUpper;
    this.isBgSlate = !this.isBgSlate;

    this.classes = {
        ...this.classes,
      'text-purple-600': this.isPurple,
      uppercase: this.isUpper,
      'bg-slate-800': this.isBgSlate,
    };
  }
}
