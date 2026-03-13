import { Component } from '@angular/core';
import { MeuForm } from "../meu-form/meu-form";

@Component({
  selector: 'app-data-binding',
  imports: [MeuForm],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})

export class DataBinding {
[x: string]: any;

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/500/300'

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
