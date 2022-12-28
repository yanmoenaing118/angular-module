import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // isOn: boolean = false;
  counter: number = 0;

  ngOnInit(): void {
    console.log('App component mounted', this);
  }

  incCount() {
    this.counter++;
  }

  decCount() {
    this.counter--;
  }

  updateCount(value: number) {
    this.counter = value;
  }
}

@Component({
  selector: 'app-child',
  template: ` <div>value: {{ counter }}</div> `,
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() counter: number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
    console.log('child component ngOnint');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let change in changes) {
      const prop: SimpleChange = changes[change];
      const previousValue = prop.previousValue;
      const currentValue = prop.currentValue;
      const firstChange = prop.firstChange;

      console.log(`
        ${change} value changes 

        previous: ${previousValue}
        current: ${currentValue}
        first: ${firstChange}
      `);
    }
  }
}
