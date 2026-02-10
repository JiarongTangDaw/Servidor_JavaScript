import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'pokemon',
    loadComponent: () => import('../pokemon/pokemon').then(m => m.Pokemon)
  }
];
