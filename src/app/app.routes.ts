import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'investimenti',
    loadComponent: () =>
      import('./features/investimenti/investimenti.component').then(m => m.InvestimentiComponent)
  },
  {
    path: 'polizze',
    loadComponent: () =>
      import('./features/polizze/polizze.component').then(m => m.PolizzeComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then(m => m.AdminComponent)
  },
];
