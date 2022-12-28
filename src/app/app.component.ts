import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // isOn: boolean = false;
  count: number = 0;

  ngOnInit(): void {
    console.log('App component mounted', this);
  }

  incCount() {
    this.count++;
  }

  decCount() {
    this.count--;
  }

  
}


@Component({
  selector: 'app-child',
  template: `
  <div>value: {{count}}</div>
  `
})

export class ChildComponent implements OnInit {

  @Input() count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit(): void {
    console.log('child component ngOnint');
  }
}