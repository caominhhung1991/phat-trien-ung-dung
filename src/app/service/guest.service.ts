import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common'
//Object
import { Product } from '../objects/product';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// declare variable jquery and $ to use jquery plugin
declare var jquery:any;
declare var $:any;

@Injectable()
export class GuestService {
  result:any;
  
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private _http: Http, 
    private router:Router,
    private location: Location
  ) {
  }

  // Get list of products for guest
  GetListProductsByJoin() {
    return this._http.get("/api/products-guest")
      .map(result => this.result = result.json().data);
  }

  getNumOfProduct():number {
    let num = (JSON.parse(localStorage.getItem('shopping-cart'))).length;
    if(localStorage.getItem('shopping-cart')) {
    }
    console.log(num);
    return num;
  }

  addProductSession(product) {
    let products:any[] = new Array();
    products = JSON.parse(localStorage.getItem('shopping-cart'));
    products.push(product);
    localStorage.setItem('shopping-cart', JSON.stringify(products));
    console.log(JSON.parse(localStorage.getItem('shopping-cart')));
  }
  
  getProductSession() {
    let products:any[] = new Array();
    products = JSON.parse(localStorage.getItem('shopping-cart'));
    return products;
  }

  getProductDetail(id:string) {
    const url = "/api/product/" + id;
    return this._http.get(url, {headers: this.headers})
    .map(res => this.result = res.json());
  }

  getProductfromInventory(id:string) {
    const url = "/api/inventory/" + id;
    return this._http.get(url, {headers: this.headers})
    .map(res => this.result = res.json());
  }

  selectProductDetail(id:string) {
    this.router.navigate(['product/' + id]);
  }

  hoanTatThanhToan() {
    this.router.navigate(['hoan-tat-thanh-toan']);
    location.reload();
  }

  // Hoàn thành đơn đặt hàng từ khách hàng
  addOrderFromGuest(order:any):Promise<any> {
    const url = "/api/order";
    return this._http.post(url, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(res => this.result = res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.massage || error);
  }
} 