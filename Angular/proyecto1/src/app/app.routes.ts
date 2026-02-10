import { Routes } from '@angular/router';
import { Componente1 } from "../componente1/componente1";
import { Componente2 } from '../componente2/componente2';
import { Lukeskywalker } from "../lukeskywalker/lukeskywalker";
import { Starwars } from "../starwars/starwars";
import { Pokedex } from '../pokedex/pokedex';
import { EjEnlaces } from '../ej-enlaces/ej-enlaces';
import { Ej2Enlaces } from '../ej2-enlaces/ej2-enlaces';
import { AngForm } from '../ang-form/ang-form';
import { UsuForm } from '../usu-form/usu-form';

export const routes: Routes = [
    {path: 'componente1', component: Componente1 },
    {path: 'componente2', component: Componente2 },
    {path: 'lukeskywalker', component: Lukeskywalker },
    {path: 'starwars', component: Starwars },
    {path: 'pokedex', component: Pokedex },
    {
        path: 'enlace',  // 👈 Usa loadChildren en lugar de component
        component: EjEnlaces,
        loadChildren: () => import('../ej-enlaces/ej-enlaces.routing')
            .then(m => m.EjEnlacesRoutingModule)
    },
    {path: "ej2Enlaces", component: Ej2Enlaces},
    {path: 'angform', component: AngForm},
    {path:'usuform', component: UsuForm},
    {
      path: 'ejerStarwars',
      loadComponent: () => import('../ejer-starwars/ejer-starwars').then(m => m.EjerStarwars)
    },
    // ejercicio 2 de routing (relacionado con ej2-enlaces)
    {path:'**', component: Componente1}
];

// import { Routes } from '@angular/router';
// import { Componente1 } from "../componente1/componente1";
// import { Componente2 } from '../componente2/componente2';
// import { Lukeskywalker } from "../lukeskywalker/lukeskywalker";
// import { Starwars } from "../starwars/starwars";
// import { Pokedex } from '../pokedex/pokedex';
// import { EjEnlaces } from '../ej-enlaces/ej-enlaces';
// import { EjEnlacesHijo } from '../ej-enlaces-hijo/ej-enlaces-hijo';
// import { Ej2Enlaces } from '../ej2-enlaces/ej2-enlaces';

// export const routes: Routes = [
//     {path: 'componente1', component: Componente1 },
//     {path: 'componente2', component: Componente2 },
//     {path: 'lukeskywalker', component: Lukeskywalker },
//     {path: 'starwars', component: Starwars },
//     {path: 'pokedex', component: Pokedex },
//     {
//         path: 'enlace',
//         component: EjEnlaces,
//         children: [
//             {path: 'hijo', component: EjEnlacesHijo}
//         ]
//     },
//     {path: "ej2Enlaces", component: Ej2Enlaces},
//     {path:'**', component: Componente1}
// ];
