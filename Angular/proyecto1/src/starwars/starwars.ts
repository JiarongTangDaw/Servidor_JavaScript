import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";
import { lastValueFrom } from "rxjs";
import { CommonModule } from '@angular/common';
import { Personaje } from '../models/personaje';
import { Lukeskywalker } from '../lukeskywalker/lukeskywalker';


@Component({
  selector: 'app-starwars',
  imports: [CommonModule,Lukeskywalker],
  templateUrl: './starwars.html',
  styleUrl: './starwars.css',
})
export class Starwars {
  datosPersonaje:any = null; // Aquí almacenaremos los datos recibidos de la API
  personajes: Personaje[] = []; // Aquí almacenaremos los personajes recibidos del hijo


  constructor(private apiService: ApiService) {} // Inyectamos el servicio API

  async ngOnInit() { // Al iniciar el componente, cargamos los datos de la API
    this.apiService.apiUrl = 'https://swapi.dev/api/people/';
    this.datosPersonaje = this.apiService.getPosts();
    this.datosPersonaje = await lastValueFrom(this.datosPersonaje);
    this.datosPersonaje = this.datosPersonaje.results;
  }

  cargarNaves(e:any){
    //esta funcion me pinta los datos de las naves de cada personaje
    this.personajes = e;
  }
}
