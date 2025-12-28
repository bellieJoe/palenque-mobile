import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryFeesPage } from './delivery-fees.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryFeesPageRoutingModule {}
