import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule  } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
//firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import{AngularFireStorageModule}from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
//componentes
import { AppComponent } from './app.component';
import {environment}from '../environments/environment';
import { ProductsComponent } from './components/products/products.component';
import { ListProductsComponent } from './components/Products/list-products/list-products.component';
import { ProductComponent } from './components/Products/product/product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NfPageComponent } from './components/nf-page/nf-page.component';

//services
import{ProductService}from './services/product.service';
import { CountriesComponent } from './components/countries/countries.component'
import {HttpClientModule}from '@angular/common/http'
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import{AuthService}from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './guards/auth.guard';
import { PipesfilterPipe } from './pipes/pipesfilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductsComponent,
    ProductComponent,
    CountriesComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    PrivatePageComponent,
    NfPageComponent,
    PipesfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule ,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    NgxPaginationModule
  ],
  providers: [
    ProductService,
    AuthService,
    AuthGuard,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
