import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StallRentsPage } from './stall-rents.page';

const routes: Routes = [
  {
    path: '',
    component: StallRentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StallRentsPageRoutingModule {}
