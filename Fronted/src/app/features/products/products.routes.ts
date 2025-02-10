import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () => import('./products.component'),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./details/details.component'),
  },
] as Routes;
