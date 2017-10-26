import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// service
import { GuestService } from './../../service/guest.service';
import { MainService } from './../../service/main.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  selectedProduct:any;
  constructor(
    private mainService: MainService,
    private guestService: GuestService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onSelect(product:any) {
    this.selectedProduct = {
      _id: product._id,
      product_id: product.product_id,
      product_name: product.product_name,
      product_image: product.product_image,
      price: product.price,
      quantity: product.quantity
    }
    console.log(this.selectedProduct);
  }

  getProduct():void {
    
  };

  increase() {
    this.product.quantity += 1;
  }

  decrease() {
    if(this.product.quantity > 1 ) {
      this.product.quantity -= 1;
    }
  }
  id:string;
  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      this.id = params.get('id');
      return this.guestService.getProductDetail(this.id);
    })
    .subscribe(res => {
      this.product = res;
      this.product.quantity = 1;
      this.guestService.getProductfromInventory(this.product._id).subscribe( res => {
        this.product.price = res.price;
      })
    });
  }
}
