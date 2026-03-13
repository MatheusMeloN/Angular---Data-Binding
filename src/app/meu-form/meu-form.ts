import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  imports: [FormsModule],
  templateUrl: './meu-form.html',
  styleUrl: './meu-form.scss',
})
export class MeuForm {

  nome: string = "abc";

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

}
