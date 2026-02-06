import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../model/personaje';
import { CommonModule } from '@angular/common';
import { ListaPersonajes } from '../lista-personajes/lista-personajes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ficha-por-personaje',
  standalone: true,
  imports: [CommonModule, ListaPersonajes],
  templateUrl: './ficha-por-personaje.html',
  styleUrls: ['./ficha-por-personaje.css'],
})
export class FichaPorPersonaje {
  personajes: Personaje[] = [];
  personajeSeleccionado: Personaje | null = null;

  constructor(private router: Router) {}

  cargarPersonajes(e: any) {
    this.personajes = e;
  }

  detallePersonaje(personaje: Personaje) {

    this.personajeSeleccionado = personaje;
    //se pasa el personaje seleccionado a la ruta detalle-personaje
    this.router.navigate(['/detalle-personaje'], { state: { personaje: this.personajeSeleccionado } });
  }
}
