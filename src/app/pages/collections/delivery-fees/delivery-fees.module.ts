import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryFeesPageRoutingModule } from './delivery-fees-routing.module';

import { DeliveryFeesPage } from './delivery-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryFeesPageRoutingModule
  ],
  declarations: [DeliveryFeesPage]
})
export class DeliveryFeesPageModule {}
