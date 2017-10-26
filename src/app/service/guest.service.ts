import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
//Object
import { Product } from '../objects/product';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class GuestService {

//   constructor() { }

// }
@Injectable()
export class GuestService {
  result:any;
  
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private _http: Http, private router:Router) {
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
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.massage || error);
  }
} 