import { Component } from '@angular/core';
import { SerStarwars } from '../services/ser-starwars';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ejer-starwars',
  imports: [],
  templateUrl: './ejer-starwars.html',
  styleUrl: './ejer-starwars.css',
})
export class EjerStarwars {
  personajes: any;

  constructor(private serStarwars: SerStarwars) { }

  async ngOnInit() {
    //version con subscribe
    this.serStarwars.getPersonajes().subscribe((data: any) => {
      this.personajes = data;
    });
    console.log(this.personajes);

    //version con lastValueFrom
    let observable = this.serStarwars.getPersonajes();
    let datos = await lastValueFrom(observable);
    console.log(datos);
  }
}
