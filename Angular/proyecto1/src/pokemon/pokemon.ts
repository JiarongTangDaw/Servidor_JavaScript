import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { Poke } from '../models/poke';
import { Efecto } from '../models/efecto';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  @Input() listaPokemon: any;
  
  @Output() retornoListaPokemon: EventEmitter<Poke[]> = new EventEmitter<Poke[]>();

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
   await this.cargarDetallesPokemon();
  }

  async cargarDetallesPokemon() {
    let coleccion: Poke[] = [];
    for (let pokemon of this.listaPokemon) {
      let p = await this.obtenerPokemon(pokemon.url);
      coleccion.push(p);

    }
    this.retornoListaPokemon.emit(coleccion);
  }

  async obtenerPokemon(url: string): Promise<Poke> {
    this.apiService.apiUrl = url;
    let pokeDetails: any;
    let p = new Poke();
    pokeDetails = this.apiService.getPosts();
    pokeDetails = await lastValueFrom(pokeDetails);
    p.name = pokeDetails.name;
    p.img = pokeDetails.sprites["other"]["official-artwork"].front_default;
    let habilidades: Efecto[] = [];
    for (let ability of pokeDetails.abilities) {
      let habilidad = await this.obtenerEfectos(ability.ability.url);
      habilidades.push(habilidad);
    }
    p.habilidades = habilidades;
    return p;
  }

  async obtenerEfectos(url: string): Promise<Efecto> {
    let pokeEffects: any;
    let efecto: Efecto = new Efecto(); 
    this.apiService.apiUrl = url;
    pokeEffects = this.apiService.getPosts();
    pokeEffects = await lastValueFrom(pokeEffects);
    pokeEffects = pokeEffects.effect_entries;
    for (let effect of pokeEffects) {
      if (effect.language.name == "en") {
        efecto.effect = effect.effect;
        efecto.short_effect = effect.short_effect;
      }
    }
    return efecto;
  }
}
