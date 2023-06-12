import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizasComponent } from '../app/polizas/polizas.component';
import { CoberturasComponent } from '../app/coberturas/coberturas.component';


const routes: Routes = [
  { path: 'polizas', component: PolizasComponent },
  { path: 'coberturas', component: CoberturasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
