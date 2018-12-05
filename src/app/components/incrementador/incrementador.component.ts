import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  leyenda: string = 'leyenda';
  progreso: number = 50;

  @Input() algo;

  constructor() { }

  ngOnInit() {
  }

  progresochan( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0  && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = (this.progreso + valor);
  }

}
