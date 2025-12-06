import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbulantStallsPageRoutingModule } from './ambulant-stalls-routing.module';

import { AmbulantStallsPage } from './ambulant-stalls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbulantStallsPageRoutingModule
  ],
  declarations: [AmbulantStallsPage]
})
export class AmbulantStallsPageModule {}
