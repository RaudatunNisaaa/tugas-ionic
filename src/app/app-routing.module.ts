import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./buku/buku.module').then( m => m.BukuPageModule)
  },
  {
    path: '',
    redirectTo: 'buku',
    pathMatch: 'full'
  },
  {
    path: 'buku',
    loadChildren: () => import('./buku/buku.module').then( m => m.BukuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
