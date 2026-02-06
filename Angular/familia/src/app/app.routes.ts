import { Routes } from '@angular/router';
import { Padre } from '../padre/padre';
import { Hijo } from '../hijo/hijo';


export const routes: Routes = [
    {path: 'Padre', component: Padre},
    {path:'Hijo', component:Hijo}
];
