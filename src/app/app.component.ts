import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Angular</h1>
    <app-child></app-child>
    <app-child></app-child>
    <p>
      App Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      asperiores deserunt, itaque id vel dicta nihil in cupiditate maiores
      doloremque, eum earum. Consequatur, minima debitis est expedita provident
      sequi id?
    </p>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {}

@Component({
  selector: 'app-child',
  template: `
    <h1>Hello Child</h1>
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe
        perspiciatis quia tempora architecto! Officia, id! Temporibus sunt
        quibusdam, repellat vitae accusantium quis libero. Optio,
        necessitatibus. Animi nam dignissimos iste.
      </p>
      <app-nested-child></app-nested-child>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis quam
        saepe earum iure rem temporibus dicta odio veritatis, numquam
        reprehenderit recusandae laborum, quas et eius odit voluptatum? Esse,
        ducimus?
      </p>
    </div>
  `,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ChildApp {}

@Component({
  selector: 'app-nested-child',
  template: `
    <h1>Nested Child Component</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, alias,
      repudiandae saepe ratione nemo porro perspiciatis nobis, quam deserunt
      dolores molestiae eum natus qui modi sit voluptatibus perferendis. Ex,
      voluptates.
    </p>
    <app-2nested-child></app-2nested-child>
  `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NestedChildApp {}

@Component({
  selector: 'app-2nested-child',
  template: `
    <h1>
      2 Level Nested Child Component
      <h1></h1>
    </h1>
  `,
  styles: [
    `
      h1 {
        color: pink;
      }
    `,
  ],
})
export class TwoNestedChildComponent {



}
