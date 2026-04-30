import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Film Collection',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About',
  },
  {
    path: 'films/:id',
    loadComponent: () => import('./features/film-details/film-details').then((m) => m.FilmDetails),
  },
  { path: '**', redirectTo: '' },
];
