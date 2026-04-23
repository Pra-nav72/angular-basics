import { Component, signal, OnInit } from '@angular/core';
import { Products } from '../../services/products';
import { single } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(public productService:Products){}

  productsData:any = signal([]);

  ngOnInit() {
    this.getProductData();
  }

  getProductData(){
    // this will return a promise, use subscribe() to handle
    this.productService.getProducts().subscribe((data)=>{
      console.log(data.products);
      this.productsData.set(data.products);
    });
    
  }
}
