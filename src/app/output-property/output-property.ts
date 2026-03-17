import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  imports: [],
  templateUrl: './output-property.html',
  styleUrl: './output-property.scss',
  //outputs: ['mudouValor']
})
export class OutputProperty {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', ) campoValorInput!: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
