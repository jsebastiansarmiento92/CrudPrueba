import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule  } from "@angular/platform-browser/animations";
//import { ToastrModule } from "ngx-toastr";
//firebase
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireModule} from 'angularfire2'
import{AngularFireStorageModule}from 'angularfire2/storage';

//componentes
import { AppComponent } from './app.component';
import {environment}from '../environments/environment';
import { ProductsComponent } from './components/products/products.component';
import { ListProductsComponent } from './components/Products/list-products/list-products.component';
import { ProductComponent } from './components/Products/product/product.component';


//services
import{ProductService}from './services/product.service';
import { CountriesComponent } from './components/countries/countries.component'
import {HttpClientModule}from '@angular/common/http'

import{AuthService}from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ListProductsComponent,
    ProductComponent,
    CountriesComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule ,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    //ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
