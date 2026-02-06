import { Component } from '@angular/core';
import { ListaPersonajes } from '../lista-personajes/lista-personajes';
import { Personaje } from '../model/personaje';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-personajes',
  imports: [ListaPersonajes, CommonModule],
  templateUrl: './tabla-personajes.html',
  styleUrls: ['./tabla-personajes.css'],
})
export class TablaPersonajes {
  personajesTabla: Personaje[] = [];
  listaKey: string[] = [];
  personajeSeleccionado: Personaje | null = null;

  constructor(private router: Router) {}
  cargarPersonajes(e: any) {
    this.personajesTabla = e;
    this.cargarKeys(this.personajesTabla[0]);
  }

  cargarKeys(p: Personaje) {
    let k = Object.keys(p);
    for (const key of k){
      if(key != 'descripcion'){
        this.listaKey.push(key);
      }
    }
  }

  detallePersonaje(personaje: Personaje) {

    this.personajeSeleccionado = personaje;
    //se pasa el personaje seleccionado a la ruta detalle-personaje
    this.router.navigate(['/detalle-personaje'], { state: { personaje: this.personajeSeleccionado } });
  }
}
