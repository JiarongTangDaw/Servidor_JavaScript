import { Component } from '@angular/core';
import { ServicePokemon } from '../service/service-pokemon';
import { last, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {

  pokemon: any;

  constructor(private servicioPokemon: ServicePokemon) {}

  async ngOnInit() {
    let observable = this.servicioPokemon.getPokemon()
    let dato  = await lastValueFrom(observable);
    this.pokemon = dato;

    console.log(this.pokemon);

  }

}
