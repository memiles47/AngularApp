import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]
})

export class SandboxComponent {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [
    {
      firstName: 'Rick',
      lastName: 'Miles'
    },

    {
      firstName: 'Chris',
      lastName: 'Logue'
    },

    {
      firstName: 'Tyra',
      lastName: 'Winegar'
    },

    {
      firstName: 'Mike',
      lastName: 'Miles'
    },

    {
      firstName: 'Diane',
      lastName: 'Waller'
    },
  ];

  constructor() {
    this.people[2] = 'Carol';
  }
}
