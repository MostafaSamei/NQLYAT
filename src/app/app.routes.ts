import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.module/pages/home-page/home-page.component').then(
        (mod) => mod.HomePageComponent
      ),
  },
];
