import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';



@Component({
  selector: 'app-child',
  template: ` <div>value: {{ counter }}</div> `,
})
export class ChildComponent implements OnInit, OnChanges {
  counter = 0;
  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  calledByParent() {
    console.log('called by parent using template local variable');
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild("ch1", { static: false })
  child: any;

  ngOnInit(): void {
    
  }

  updateCount() {
    this.child.counter = this.child.counter++;
  }

  calledByParent() {

  }



}

