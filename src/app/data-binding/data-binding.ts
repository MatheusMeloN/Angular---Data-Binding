import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})

export class DataBinding {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/500/300'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }
  
}
