import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sandbox',
  template: `<h1>Hello World</h1>`
})

export class SandboxComponent {
  name: string = 'Michael Miles';
  age: number = 55;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumbersArray: number[] = [1, 2, 3];
  myStringsArray: string[] = ['Michael', 'Miles'];
  myAnyArray: any[] = [1, 2, 3, 'Hello', 'World'];
  myTuple: [string, number] = ['Michael', 55];
  unusable: void = undefined;
  u: undefined = undefined;
  n: null = null;

  constructor() {
    this.myNumbersArray = [1, 2];
    this.myStringsArray = ['Bob', 'Neubauer'];
  }
}

