import {Component} from '@angular/core';
import {Customer} from './Customer';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sandbox',
  template: `<h1>Hello World</h1>`
})

export class SandboxComponent {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com'
    };

    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com'
      },
      {
        id: 2,
        name: 'Brad Traversy',
        email: 'brad@gmail.com'
      },
      {
        id: 3,
        name: 'Steve Smith',
        email: 'ssmith@gmail.com'
      },
      {id: 4,
        name: 'Michael Miles',
        email: 'michael@miles-me.net'}
    ];
  }
}
