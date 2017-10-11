import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  result:any;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }
  
  private isUserLoggedIn;
  public username = "unknown";

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = "admin";
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  // get api
  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  // -------- product api -----------
  // get list of product
  
  // post
  addProduct(product) {
    return this._http.post("api/product", product)
      .map(res => res.json());
  }

}