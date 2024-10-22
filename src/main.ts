import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./app/features/home/home.component').then(m => m.HomeComponent) },
  { path: 'user-list', loadComponent: () => import('./app/features/user/user-list/user-list.component').then(m => m.UserListComponent) },
  { path: 'login', loadComponent: () => import('./app/features/auth/login/login.component').then(m => m.LoginComponent)},
  { path: 'register', loadComponent: () => import('./app/features/auth/register/register.component').then(m => m.RegisterComponent)},
  { path: 'provider', loadComponent: () => import('./app/features/providers/provider-list/provider-list.component').then(m => m.ProviderListComponent)},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));