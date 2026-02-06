import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css',
})
export class Componente1 {
  varJs:string="Estais todos suspensos";

  contar (b:number){
    return this.varJs = "Que no que os apruebo";
  };

  contador:number = 0;
  incrementar(){
    this.contador++;
  }
}
