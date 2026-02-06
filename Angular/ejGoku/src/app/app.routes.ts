import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'ficha-por-personaje',
    loadComponent: () => import('../ficha-por-personaje/ficha-por-personaje')
    .then(m => m.FichaPorPersonaje)
  },
  {path:'detalle-personaje',
    loadComponent: () => import('../detalle-personaje/detalle-personaje')
    .then(m => m.DetallePersonaje)
  },
  {path:'tabla-personajes',
    loadComponent: () => import('../tabla-personajes/tabla-personajes')
    .then(m => m.TablaPersonajes)
  },
  {path:'**', redirectTo: 'ficha-por-personaje'}
];
