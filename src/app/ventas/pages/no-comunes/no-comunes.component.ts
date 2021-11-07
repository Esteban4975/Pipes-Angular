import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Esteban';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Esteban','Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    this.genero = this.genero === 'femenino' ? 'masculino' : 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Esteban',
    edad: 25,
    direccion: 'CDMX, México'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  miObservable = interval(1000); // 1,2,3...

  valorPromesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    },3500);
  });

}
