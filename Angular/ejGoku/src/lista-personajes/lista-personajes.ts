import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { Personaje } from '../model/personaje';
//import { FichaPorPersonaje } from '../ficha-por-personaje/ficha-por-personaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-personajes',
  imports: [CommonModule],
  templateUrl: './lista-personajes.html',
  styleUrls: ['./lista-personajes.css'],
})
export class ListaPersonajes {
  listaPersonajes: Personaje[] = [];

  @Output() enviarPersonajes: EventEmitter<Personaje[]> = new EventEmitter<Personaje[]>();

  constructor(private apiService: ApiService) {}
  async ngOnInit() {
    await this.cargarPersonajes();
  }
  async cargarPersonajes() {
    this.apiService.apiUrl = 'https://dragonball-api.com/api/characters';
    let datos = this.apiService.getPosts();
    let resultado = await lastValueFrom(datos);

    for (const personaje of resultado.items) {
      let p = new Personaje();
      p.id = personaje.id;
      p.nombre = personaje.name;
      p.img = personaje.image;
      p.raza = personaje.race;
      p.genero = personaje.gender;
      p.ki = personaje.ki;
      p.maxKi = personaje.maxKi;
      p.descripcion = personaje.description;
      p.afilliation = personaje.affiliation;
      p.deletedAt = personaje.deletedAt == null? '': personaje.deletedAt;
      this.listaPersonajes.push(p);
    }
    this.enviarPersonajes.emit(this.listaPersonajes);
  }
}
