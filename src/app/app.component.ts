import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'miriam moreno';
  numero = 1000;
  obj = {
    objeto: 'Mi objeto',
    valor: 'el mundo'
  }

  cambiarNombre(): void{
    console.log(this.nombre);
    console.log(this.numero);
  }
}
