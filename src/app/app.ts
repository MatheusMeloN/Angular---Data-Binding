import { Component, signal } from '@angular/core';
import { DataBinding } from "./data-binding/data-binding";
import { Ciclo } from "./ciclo/ciclo";

@Component({
  selector: 'app-root',
  imports: [DataBinding /*, Ciclo*/],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}
