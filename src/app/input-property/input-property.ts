import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './input-property.html',
  styleUrl: './input-property.scss',
  //inputs: ['nomeCurso:nome']
})
export class InputProperty {

 @Input('nome') nomeCurso:string ='';

}
