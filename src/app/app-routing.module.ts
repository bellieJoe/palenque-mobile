import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'collections/ambulant-stalls',
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
          .then(m => m.AmbulantStallsPageModule),
        canActivate: [authGuard]
      },
      {
        path: 'stall-rents',
       loadChildren: () =>
        import('./pages/collections/stall-rents/stall-rents.module')
          .then(m => m.StallRentsPageModule),
        canActivate: [authGuard]
      },
      {
        path: 'delivery-fees',
        loadChildren: () => import('./pages/collections/delivery-fees/delivery-fees.module').then( m => m.DeliveryFeesPageModule)
      },
    ]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
