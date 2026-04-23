import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  url = 'https://dummyjson.com/products';

  // HttpClient to fetch api
  constructor(private http:HttpClient){}

  // returning the fetched data
  getProducts(){
    return this.http.get<any>(this.url);
  }
}
