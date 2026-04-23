import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ProductsResponse } from './productResponseDataTypes';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiUrl = 'https://dummyjson.com/products';

  // HttpClient to fetch api
  constructor(private http:HttpClient){}

  // returning the fetched data
  getProducts(){
    return this.http.get<ProductsResponse>(this.apiUrl);
  }
}
