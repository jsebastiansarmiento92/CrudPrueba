import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { countrier } from 'src/app/countrier';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
  
})
export class CountriesComponent implements OnInit {
  countries:countrier[]=[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string= '';
  symbol:string;

  constructor(private dataService:DataService){
    this.dataService.getData().subscribe(data=>{
      this.countries=data;
    });
  }

  ngOnInit() {
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
   for(let i=0;i<this.countries.length;i++){
      if (this.countries[i].name==this.verSeleccion) {
       // this.countries[i].currencies;
        console.log();
        this.symbol=Object.values(this.countries[i].currencies)[0].symbol;
        this.verSeleccion =this.symbol;
      }

   }
}
}
