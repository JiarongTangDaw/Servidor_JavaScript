import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-personaje.html',
  styleUrls: ['./detalle-personaje.css'],
})
export class DetallePersonaje {
  personajeElegido: Personaje | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['personaje']) {
      this.personajeElegido = navigation.extras.state['personaje'];
    }
  }
}
