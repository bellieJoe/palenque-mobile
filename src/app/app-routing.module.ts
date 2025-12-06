import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folders/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folders/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: "collections",
    children: [
      {
        path: 'ambulant-stalls',
       loadChildren: () =>
        import('./pages/collections/ambulant-stalls/ambulant-stalls.module')
          .then(m => m.AmbulantStallsPageModule)
      },
      {
        path: 'stall-rents',
       loadChildren: () =>
        import('./pages/collections/stall-rents/stall-rents.module')
          .then(m => m.StallRentsPageModule)
      }
    ]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
