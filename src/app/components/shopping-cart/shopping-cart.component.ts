import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 // declare variable jquery and $ to use jquery plugin
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private _product;
  cart_products:any = new Array();
  // products: any = new Array();
  totalPrice:number;
  @Output() products = new EventEmitter();

  @Input() set product(product) {
    this._product = product;
    this._product.quantity = 1;
    this._product.total_price = this._product.quantity * this._product.sub_prod[0].price;
    this.cart_products.push(this._product);
    this.TinhTongTienCart();
    // $("#shopping-cart").modal("show");
  }
  get product() {return this._product;}

  tinhTotalPrice(quantity, price, i) {
    this.totalPrice = quantity*price;
    this.cart_products[i].total_price = this.totalPrice;
    // console.log(`${quantity} ${price} ${i} ${this.totalPrice}`);
  }
  constructor() { }

  TinhTongTienCart() {
    this.cart_products.tong_tien = 0;
    for(let item of this.cart_products) {
      this.cart_products.tong_tien += item.total_price;
    }
  }

  DeleteProduct(index:number) {
    this.cart_products.splice(index, 1);
    this.TinhTongTienCart();
  }

  thanhToan() {
    this.products.emit(this.cart_products);
    // console.log(this.cart_products);
    $("#shopping-cart").modal("hide");
    $("#hoan-tat-don-hang").modal("show");
  }

  ngOnInit() {
    // this.initCart();
    // this.TinhTongTienCart();
  }

  initCart() {
    this.cart_products.tong_tien = 0;
  }

}
