import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() name!: string;
  @Output() sayEmitter = new EventEmitter();



  

  constructor() { }

  ngOnInit(): void {

    console.log('What is your name?');
    console.log('I love what I do and I do it consisitently');
    
  }

  getUser() {

    console.log('here is the users list');
  
  }


  talk() {
    this.sayEmitter.emit('I love ')
  }
}