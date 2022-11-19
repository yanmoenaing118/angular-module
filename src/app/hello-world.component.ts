import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1 class="text-2xl font-bold uppercase text-gray-800">Learning Angular</h1>
  `,
})
export class HelloComponent {}

@Component({
  selector: 'app-child',
  template: `
    <div class="text-lg font-bold p-4 bg-green-500 text-white">{{ num }}</div>
    
    
  `,
})
export class ChildComponent {
  num: number = 0;
  increase() {
    this.num++;
  }

  decrease() {
    this.num--;
  }
}

@Component({
  selector: 'app-parent',
  template: `
    <div class="p-5 shadow-md">

      <app-child #child></app-child>

      <div>{{child.num}}</div>
  
      <div class="flex justify-center gap-4 mt-5">
        <button (click)="increase()" class="px-4 py-2 font-bold bg-red-500 text-white">INC +</button>
        <button (click)="decrease()" class="px-4 py-2 font-bold bg-red-500 text-white">DEC -</button>
      </div>
    </div>
  `,
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent)
  private child!: ChildComponent;


  ngAfterViewInit() {
    setInterval(() => {
      this.child.num++;
    }, 1000)
  }

  increase() {
    this.child.increase();
  }

  decrease() {
    this.child.decrease();
  }

}
