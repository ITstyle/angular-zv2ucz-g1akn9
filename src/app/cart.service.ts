import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor() { }
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
}