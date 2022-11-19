import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-helloworld',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="toggleTimer()">Toggle Timer</button>
    <app-timer [hidden]="!showTimer" [childMessage]="'Hello'"></app-timer>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class HelloWorldComponent {
  title = 'Hello Yan Moe Naing, the lazy!';
  showTimer: boolean = true;

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}

@Component({
  selector: 'app-timer',
  template: `
    <h1>this is test file</h1>
    <h2>template expression {{ 5 * 5 * 5 * 5 }}</h2>
    <h1 class="font-bold">From My Parent: {{ childMessage }}</h1>
  `,
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: any;
  @Input() childMessage: string = '';
  ngOnInit() {
    this.timer = setInterval(() => {
      console.log('helo');
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getRandom() {
    return Math.round(Math.random() * 100);
  }
}

@Component({
  selector: 'app-list',
  template: `
    <div class="p-5">
      <h1>This is list</h1>
      <div *ngFor="let i of [1, 2, 3, 4]">
        <app-list-item
          (sendMessage)="receiveMessage($event)"
          [id]="i"
        ></app-list-item>
      </div>
    </div>
  `,
})
export class ListComponent {
  receiveMessage(event: any) {
    console.log(event);
  }
}

@Component({
  selector: 'app-list-item',
  template: ` <div class="p-1 shadow-md" (click)="clickItem()">{{id}}</div> `,
})
export class ListItemComponent {
  @Output() sendMessage = new EventEmitter();
  @Input() id: number = 0;

  clickItem() {
    this.sendMessage.emit(this.id);
  }
}
