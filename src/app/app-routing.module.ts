import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PrivatePageComponent} from './components/private-page/private-page.component';
import {NfPageComponent} from './components/nf-page/nf-page.component';
import{ProductsComponent} from './components/products/products.component';
import { from } from 'rxjs';

import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'privado', component: PrivatePageComponent,canActivate:[AuthGuard]},
  {path: 'productos', component: ProductsComponent,canActivate:[AuthGuard]},
  {path: '**', component: NfPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
