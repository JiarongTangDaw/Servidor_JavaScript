
import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";
import { lastValueFrom } from "rxjs";
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon/pokemon';
import { Poke } from '../models/poke';
import { ApiServiceConteo } from '../services/api.service.conteo';


@Component({
  selector: 'app-pokedex',
  imports: [CommonModule,Pokemon],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  datosPokemon: any = null;
  listaPokemon: Poke[] = [];
  cantidadPokemon: any = null;

  constructor(private apiService: ApiService, private apiServiceConteo: ApiServiceConteo) {}

  async ngOnInit() {
    this.apiService.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1500';
    let resultado = this.apiService.getPosts();
    let dato = await lastValueFrom(resultado);
    this.datosPokemon = dato.results;    
  }

  cargarListaPokemon(e:any){
    this.listaPokemon = e;
  }

  async contarPokemon(propiedad:string) {
    this.apiServiceConteo.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1500';
    this.apiServiceConteo.propiedad = propiedad;
    this.cantidadPokemon = await this.apiServiceConteo.contarElementosCampo();
  }
}
