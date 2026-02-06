import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Componente1 } from '../componente1/componente1';

@Component({
  selector: 'app-componente2',
  imports: [FormsModule, Componente1],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css',
})
export class Componente2 {
  //ejercicio9
  titulo: string = 'Titulo del Componente 2';
  newTitulo:string = 'Nuevo Titulo del Componente 2';
  contador2: number = 10;
  sumarContador(){
    this.contador2++;
    return this.contador2;
  }
  //ejercicio9.2
  restarContador(){
    this.contador2--;
    if(this.contador2 < 0){
      alert("El contador es negativo");
    }
    return this.contador2;
  }
  //fin ejercicio9.2
  cambioTitulo(){
      let value:string = this.titulo;
      this.titulo = this.newTitulo;
      this.newTitulo = value;
    return this.titulo;
  }

  //ejercicio9.3
  nombre:string = '';
  saludo:string = '';
  saludar(){
    if(this.nombre.trim() == ''){
      this.saludo = 'Por favor, introduce tu nombre';
    }else{
      this.saludo = "Hola " + this.nombre + ", bienvenido al Componente 2";
    }
    return this.saludo;
  }
}
