import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  valor = '';

  // Con el Input creamos una variable que podremos asignar desde el padre.
  // En el Input se le puede mapear un nombre de forma que dentro del hijo tenga un nombre
  // pero desde el padre se utiliza con otro nombre
  // @Input('nombreUsadoEnPadre') nombreUsadoEnHijo;
  @Input() valorPasadoPorPadre;
  // Con el output declaramos un evento que se podra controlar en el padre.
  // Ojo solo lo declaramos (damos nombre y tipo) pero aqui no se emite nada
  // Se puede mapear un nombre de forma que dentro del hijo tenga un nombre
  // pero desde el padre se utiliza con otro nombre
  // @Output('nombreEnventoParaPadre') nombreEnventoParaHijo = new EventEmitter<string>();
  @Output() cambio = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // En esta funcion emitimos el evento. Cada vez que pase por aqui emitira un evento.
  controlClick() {
    console.log('Emitiendo ' + this.valor);
    this.cambio.emit(this.valor);
  }
}
