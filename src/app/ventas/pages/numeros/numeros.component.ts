import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent  {

  constructor() { }

  ventasNetas: number = 2567789.5567;
  porcentaje : number = 0.4856;
  pi: number= 3.14159265359;

}
