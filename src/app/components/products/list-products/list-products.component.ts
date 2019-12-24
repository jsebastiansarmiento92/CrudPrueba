import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
// model
import { Product } from '../../../models/product';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {



  productList: Product[];
 

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    //snapshotChanges es un metodo de firebase el cual me trae en tiempo real toda la base de datos y los cambios realizados a esta
    return this.productService.getProducts().
      snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      });

  }

  onEdit(product:Product){
    this.productService.selectProduct=Object.assign({},product);
  }
  onDelete($key:string){
  //  if(confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct($key);
     // this.toastr.warning('Deleted Successfully', 'Product Removed');
 //   }
  }
}

