import {Component} from '@angular/core';
import {Customer} from './Customer';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sandbox',
  template: `<h1>Hello World</h1>`
})

export class SandboxComponent {
  customer: Customer;

  constructor() {
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'John@gmail.com'
    };
  }
}
