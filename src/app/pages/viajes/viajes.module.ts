import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ViajesPageRoutingModule } from './viajes-routing.module';

import { ViajesPage } from './viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesPageRoutingModule
  ],
  declarations: [ViajesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViajesPageModule {}
