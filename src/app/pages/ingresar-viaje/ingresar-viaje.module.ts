import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarViajePageRoutingModule } from './ingresar-viaje-routing.module';

import { IngresarViajePage } from './ingresar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarViajePageRoutingModule
  ],
  declarations: [IngresarViajePage]
})
export class IngresarViajePageModule {}
