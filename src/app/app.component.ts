import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [appHighlight]="color" defaultColor="pink">Higlited text</div>

    <div>
      <input
        type="radio"
        name="colors"
        (change)="setColor($event)"
        value="green"
      />
      <input
        type="radio"
        name="colors"
        (change)="setColor($event)"
        value="red"
      />
      <input
        type="radio"
        name="colors"
        (change)="setColor($event)"
        value="blue"
      />
    </div>

    <app-toast appHighlight [type]="'success'" [message]="'hello'"></app-toast>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color!: string;
  setColor(e: any) {
    this.color = e.target.value;
  }
}

@Component({
  selector: 'app-toast',
  template: `
    <div
      [ngClass]="{
        'p-2': true,
        'border-l-4': true,
        'text-gray-500': true,
        'border-green-600': type === 'success',
        'border-blue-500': type === 'info',
        'border-red-600': type === 'error'
      }"
    >
      {{ message }}
    </div>
  `,
})
export class Toast {
  @Input() type!: string;
  @Input() message!: string;
}
