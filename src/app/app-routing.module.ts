import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { PolizasComponent } from '../app/polizas/polizas.component';
import { CoberturasComponent } from '../app/coberturas/coberturas.component';


const routes: Routes = [
  { path: 'polizas', component: PolizasComponent },
  { path: 'coberturas', component: CoberturasComponent },
  { path: '', redirectTo: '/polizas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
