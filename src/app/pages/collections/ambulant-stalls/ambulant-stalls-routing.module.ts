import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbulantStallsPage } from './ambulant-stalls.page';

const routes: Routes = [
  {
    path: '',
    component: AmbulantStallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbulantStallsPageRoutingModule {}
