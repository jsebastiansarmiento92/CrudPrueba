import { Component, OnInit } from '@angular/core';
import{ProductService}from '../../../services/product.service'
import { countrier } from 'src/app/countrier';
import { DataService } from '../../../services/data.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
//clases importadas
import { Product } from 'src/app/models/product';
import {finalize} from 'rxjs/operators';
import{Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  countries:countrier[]=[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string= '';
  symbol:string;
  code:string;
  valor:number;
  uploadPercent:Observable<number>;
  imageUrl2:Observable<string>;
  nombreBtnForm:string="Agregar";
  constructor(private productService:ProductService,private dataService:DataService,private storage:AngularFireStorage) {
    this.dataService.getData().subscribe(data=>{
      this.countries=data;

    });

   }


  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
   for(let i=0;i<this.countries.length;i++){
      if (this.countries[i].name==this.verSeleccion) {
       // this.countries[i].currencies;
        console.log();
        this.symbol=Object.values(this.countries[i].currencies)[0].symbol;
        this.code=Object.values(this.countries[i].currencies)[0].code;
        this.verSeleccion =this.symbol;
      }

   }
}
ngOnInit() {
  this.productService.getProducts();
  this.resetForm();
}
  onSubmit(productForm:NgForm){

if (productForm.value.$key!=null ) {
  this.productService.updateProduct(productForm.value);
  this.nombreBtnForm="Editar";
}else{
  this.productService.insertProduct(productForm.value);

  
}
this.resetForm(productForm);
    
  }

  resetForm(productForm?:NgForm){
    
    if (productForm!=null) {
      if (productForm.value.$key!=null) {
        console.log(productForm.value.$key);
        this.nombreBtnForm="guardar";
      }
      productForm.reset;
      this.productService.selectProduct=new Product();
    }
    
  }  
  onUpload(e){
  //console.log(e);
  const id= Math.random().toString(36).substring(2);
  const file = e.target.files[0];
  const filePath = "uploads/imagesProducts/"+id;
  const ref = this.storage.ref(filePath);
  const task = ref.put(file);
    this.uploadPercent=task.percentageChanges();

    task.snapshotChanges().pipe(finalize(()=> this.imageUrl2=ref.getDownloadURL())).subscribe();
    this.focusMethod();
  
  }
  focusMethod = function getFocus() {           
    document.getElementById("textUrl").focus();
  }
  getCountry(){
    return this.productService.getProducts();
  }
}  

