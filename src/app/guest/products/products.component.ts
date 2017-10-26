import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// service 
import { MainService} from './../../service/main.service';
import { GuestService } from './../../service/guest.service';
import { TestService } from './../../service/test.service';
 // declare variable jquery and $ to use jquery plugin
 declare var jquery:any;
 declare var $:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  numToNav: number;
  selectedProduct: any;
  testProducts:any;
  product2:any;
  products: any = new Array();
  products2: any;
  listArray:any = new Array();
  constructor(
    private mainService: MainService,
    private guestService: GuestService,
    private test: TestService,
    private router: Router
  ) { }
 
  addProduct() {
    this.test.addToCarts(this.selectedProduct);
    this.testProducts = this.test.getCarts();
  }

  getProducts() {
    this.guestService.GetListProductsByJoin().subscribe(res => {
      this.products = res;
      console.log(res);
    },res => console.log(res));
  }

  onSelect(product:any) {
    this.selectedProduct = {
      _id: product._id,
      product_id: product.product_id,
      product_name: product.product_name,
      product_image: product.product_image,
      price: product.sub_prod[0].price,
      quantity: 1
    }
  }

  pushProducts(products) {
    this.products2 = products;
    console.log(this.products2)
  }

  putToNav(event) {
    this.numToNav = event;
  }

  selectProductDetail(product) {
      this.guestService.selectProductDetail(product._id);
  };

  ngOnInit() {
    this.getProducts();
    this.testProducts = this.test.getCarts();
    // $("#hoan-tat-don-hang").modal("show");
  }

}
