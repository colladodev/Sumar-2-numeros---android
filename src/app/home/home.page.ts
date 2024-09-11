import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1: number = 0; 
  num2: number = 0; 
  resultado: number | null = null;

  constructor() {}

  calcularSuma() {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      this.resultado = this.num1 + this.num2;
    }
  }
}
