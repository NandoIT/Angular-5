import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const ROUTES:Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'form', component: HeroFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch : 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports:[ RouterModule.forRoot(
    ROUTES
    )
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
