import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StallRentsPageRoutingModule } from './stall-rents-routing.module';

import { StallRentsPage } from './stall-rents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StallRentsPageRoutingModule
  ],
  declarations: [StallRentsPage]
})
export class StallRentsPageModule {}
