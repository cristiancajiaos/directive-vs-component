import { Directive } from '@angular/core';

@Directive({
  selector: '[appHi]'
})
export class HiDirective {

  constructor() {
    console.log('hi')
  }

}
