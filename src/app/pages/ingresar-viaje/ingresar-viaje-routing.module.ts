import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarViajePage } from './ingresar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarViajePageRoutingModule {}
