import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export enum FontSizes {
  sm = "16px",
  md = "20px",
  lg = "24px"
}

@Component({
  selector:"test",
  template: `<h1>Hello</h1>`
})

class Hello {
  
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() fontSize: FontSizes = FontSizes.sm;
  @Input() primary: boolean = true;
  @Input() secondary: boolean = false;
  @Input() tertiary: boolean = false;
  @Input() rounded: boolean = false;
  @Input() lg: boolean = false;
  @Input() md: boolean = false;
  @Input() sm: boolean = true;
  @Input() family: string = "monospace";


  @Output() click = new EventEmitter<any>();
  

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit run");
  }

  onClick(event: MouseEvent) {
    this.click.emit(event);
  }

}
