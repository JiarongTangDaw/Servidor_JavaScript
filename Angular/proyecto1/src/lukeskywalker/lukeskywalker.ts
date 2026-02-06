import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Nave } from '../models/nave';
import { Personaje } from '../models/personaje';
import { Pelicula } from '../models/pelicula';
import { ApiService } from '../services/api.service';
import { lastValueFrom } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-lukeskywalker',
  imports: [CommonModule],
  templateUrl: './lukeskywalker.html',
  styleUrl: './lukeskywalker.css',
})
export class Lukeskywalker {
  
  //Una variable de entrada con los datos
  @Input() datos:any; // Aquí almacenaremos los datos recibidos del padre

  //Una variable de salida para emitir la coleccion de personajes
  @Output() enviarPersonajes: EventEmitter<Personaje[]> = new EventEmitter<Personaje[]>(); //aqui emitire la coleccion de personajes al padre

  //Una funcion de tipo coleccionpersonajes que emita mi coleccion de personajes padre

  //al iniciar el componente cargo los datos
  async ngOnInit() {
     //con los datos que vienen del padre pinto los personajes con sus pelis, mas cargo los datos
     await this.pintarPeliyNaves();
  }

  constructor(private apiService: ApiService) {} // Inyectamos el servicio API

  //funcion que pinta las pelis y naves de cada personaje
  async pintarPeliyNaves(){
    //me construira el objeto de personje pelis y naves
    let coleccion:Personaje[] = []; //coleccion de personajes a emitir

    for (let personaje of this.datos) {

      let p = new Personaje();//nuevo personaje
      p.nombre = personaje.name;
      p.pelis = [];
      p.naves = [];

      //cargo las pelis
      if (personaje.films.length > 0) {
        let listaP = await this.llamarPeli(personaje.films);
        p.pelis = listaP;
      }
      //cargo las naves
      if (personaje.starships.length > 0) {
        let listaN  = await this.llamarNave(personaje.starships);
        p.naves = listaN;
      }
      coleccion.push(p);//añado el personaje a la coleccion
  

      this.enviarPersonajes.emit(coleccion);//emito la coleccion al padre
    }
    //necesitare una clase personaje que tenga 3 propiedades nombre, pelis y naves

    //cuando termine de construirlo emito al padre
  }
  async llamarNave(naves:Array<string>):Promise<Nave[]>{
    let listaNaves:Nave[] = [];
    for (let naveUrl of naves) {
      this.apiService.apiUrl = naveUrl;
      let naveData = await lastValueFrom(this.apiService.getPosts());
      let nave = new Nave();
      nave.name = naveData.name;
      nave.model = naveData.model;
      listaNaves.push(nave);
    }
    
    return listaNaves;
  }

  async llamarPeli(peliculas:Array<string>):Promise<Pelicula[]>{
    let listaPelis:Pelicula[] = [];
    for (let peliUrl of peliculas) {
      this.apiService.apiUrl = peliUrl;
      let peliData = await lastValueFrom(this.apiService.getPosts());
      let peli = new Pelicula();
      peli.title = peliData.title;
      peli.opening_crawl = peliData.opening_crawl;
      listaPelis.push(peli);
    }
    return listaPelis;
  }
}
