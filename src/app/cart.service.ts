import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }
  item = [];
  addToCart(product){
    this.item.push(product);
  }
  getItems(){
    return this.item
  }
  clearCart(){
    this.item= [];
    return this.item
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}