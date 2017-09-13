import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sandbox',
  template: `
    <h1>{{name}} is {{age}} years old.</h1>
    <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
    <ul>
      <li>{{'Hello World'}}</li>
      <li>{{1 + 1}}</li>
      <li>{{showAge()}}</li>
    </ul>
  `
})

export class SandboxComponent {
  name = 'Michael Miles';
  age = 53;
  person = {firstName: 'Steve', lastName: 'Smith'};

  constructor() {
    console.log('Constructor ran...');
    // this.age = 55;
    this.hasBirthDay();
    this.hasBirthDay();
  }

  hasBirthDay() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }
}
