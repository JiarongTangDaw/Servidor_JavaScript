import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-ej2-enlaces',
  imports: [RouterLink],
  templateUrl: './ej2-enlaces.html',
  styleUrl: './ej2-enlaces.css',
})
export class Ej2Enlaces {

  constructor(private router: Router) {}

  IrA(ruta: string) {
    this.router.navigate([ruta]);
  }
}
