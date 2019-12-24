import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {countrier} from '../countrier'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //se usa el modulo httpClient de tipo HttpClient de manera privada que solo usaremos en esta clase para 
  constructor(private httpClient:HttpClient) { 
    console.log('service is working');

  }
  getData(){
    return this.httpClient.get<[countrier]>('https://restcountries.eu/rest/v2/all');
  }
  
}
