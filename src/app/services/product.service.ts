import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from '../models/product';
//import {} from'rxjs/add/operator/map';


@Injectable()
export class ProductService {


  producList: AngularFireList<any>;
  selectProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) {


  }
  getProducts() {
  
    console.log(this.producList);
    return this.producList = this.firebase.list('products');
    
  }
  
  insertProduct(product: Product) {
    this.producList.push({
      name: product.name,
      characteristic: product.characteristic,
      releaseDate: product.releaseDate,
      manufacturerMail: product.manufacturerMail,
      country: product.country,
      price:product.price,
      stock: product.stock,
      soldUnit: product.soldUnit,
      imageUrl: product.imageUrl
    });
  }
  updateProduct(product: Product) {

    this.producList.update(product.$key, {
      name: product.name,
      characteristic: product.characteristic,
      releaseDate: product.releaseDate,
      manufacturerMail: product.manufacturerMail,
      country: product.country,
      price:product.price,
      stock: product.stock,
      soldUnit: product.soldUnit,
      imageUrl: product.imageUrl

    })
  }
  deleteProduct($key: string) {
    this.producList.remove($key);
  }

}
