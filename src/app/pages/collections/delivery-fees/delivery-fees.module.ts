import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryFeesPageRoutingModule } from './delivery-fees-routing.module';

import { DeliveryFeesPage } from './delivery-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryFeesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeliveryFeesPage]
})
export class DeliveryFeesPageModule {}
