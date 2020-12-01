import { Routes } from '@angular/router';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos/photo.module').then(m => m.PhotoModule)
  },
  { path: '**', component: NotFoundComponent }
];
