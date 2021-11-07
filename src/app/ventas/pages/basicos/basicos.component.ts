import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'esteban';
  nombreUpper: string = 'ESTEBAN';
  nombreCompleto: string = 'EsTeBaN VALverdE'

  fecha: Date = new Date();

}
