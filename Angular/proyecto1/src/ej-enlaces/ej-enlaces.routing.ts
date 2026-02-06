import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EjEnlacesHijo } from "../ej-enlaces-hijo/ej-enlaces-hijo";

const routes: Routes = [
    {
        path: '',  // 👈 Cambia 'enlace' por '' (vacío)
        children: [
            {path: 'hijo', component: EjEnlacesHijo}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EjEnlacesRoutingModule {

}