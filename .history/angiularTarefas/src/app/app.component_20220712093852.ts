import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
t

inputList = (nomes:string)=> {

  this.teste = nomes;

}
  
}
