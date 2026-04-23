import { Component, signal, OnInit } from '@angular/core';
import { Products } from '../../services/products';
import { single } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/productResponseDataTypes';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(public productService:Products){}

  // we are only storing arrays(products), that's why its type is this.
  productsData = signal<Product[] | undefined>(undefined);

  ngOnInit() {
    this.getProductData();
  }

  getProductData(){
    // this will return an observable, use subscribe() to handle
    this.productService.getProducts().subscribe((data)=>{
      console.log(data.products);
      this.productsData.set(data.products);
    });
    
  }
}
