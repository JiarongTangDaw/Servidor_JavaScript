import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ej-enlaces',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './ej-enlaces.html',
  styleUrl: './ej-enlaces.css',
})
export class EjEnlaces {

  constructor(private router: Router) {}
  IrStarWars() {
    this.router.navigate(['/starwars']);
  }
}