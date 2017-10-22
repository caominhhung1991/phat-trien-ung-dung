import { Injectable } from '@angular/core';
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

  constructor(private _http: Http) {
  }

  // Get list of products for guest
  GetListProductsByJoin() {
    return this._http.get("/api/products-guest")
      .map(result => this.result = result.json().data);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.massage || error);
  }
} 