import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ang-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './ang-form.html',
  styleUrl: './ang-form.css',
})
export class AngForm {
  nombre:string = '';
  email:string = '';
  edad:number | null = null;

  enviar(){
    alert(`Nombre: ${this.nombre}\nEmail: ${this.email}\nEdad: ${this.edad}`);
  }
}
