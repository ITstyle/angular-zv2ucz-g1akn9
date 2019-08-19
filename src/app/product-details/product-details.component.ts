import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private router:ActivatedRoute,private cartService:CartService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
      this.product = products[+param.get('productId')];
    });
  }
  addToCart(product){
    window.alert('添加购物车成功')
    this.cartService.addToCart(product);
  }

}         