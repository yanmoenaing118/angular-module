import { Component, Directive, Input, ViewChild } from '@angular/core';

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

@Directive({
    selector: 'pane'
})

export class Pane {
    @Input() id!: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1 class="mb-4">App Component</h1>
    <pane id="1" *ngIf="shouldShow"></pane>
    <pane id="2" *ngIf="!shouldShow"></pane>

    <button (click)="toggle()">Toggle</button>
    
  `,
})
export class AppComponent {

    selectedPane!: string;
    shouldShow: boolean = false;

    @ViewChild(Pane)
    set page(v: Pane) {
        this.selectedPane = v.id;
    }

    toggle() {
        this.shouldShow = !this.shouldShow;
    }

}
