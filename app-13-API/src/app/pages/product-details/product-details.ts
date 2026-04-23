import { Component, signal } from '@angular/core';
import { Products } from '../../services/products';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/productResponseDataTypes';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(public productService:Products, private route:ActivatedRoute){}

  productDescription = signal<Product | undefined>(undefined);
  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe((data)=>{
      data.products.filter((item)=>{
        // item.id is string but productId is number, so we cover
        if(item.id.toString() === productId){
          this.productDescription.set(item);
        }
      });
    });
    
  }
  
}
