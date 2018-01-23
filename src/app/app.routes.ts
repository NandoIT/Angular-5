import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: HeroFormComponent },
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
