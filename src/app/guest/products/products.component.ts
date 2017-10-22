import { Component, OnInit } from '@angular/core';
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
  selectedProduct: any;
  testProducts:any;
  product2:any;
  products: any = new Array();
  products2: any;
  constructor(
    private mainService: MainService,
    private guestService: GuestService,
    private test: TestService
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
    this.selectedProduct = product;
    this.product2 = product;
    this.product2.quantity = 1;
  }

  onSelect2(product2:any) {
    this.selectedProduct = product2;
    $("#product-detail").modal("toggle");
    $("#shopping-cart").modal("toggle");
  }

  increase() {
    this.product2.quantity += 1;
  }

  decrease() {
    if(this.product2.quantity > 1 ) {
      this.product2.quantity -= 1;
    }
  }

  pushProducts(products) {
    this.products2 = products;
    console.log(this.products2)
  }

  ngOnInit() {
    this.getProducts();
    this.testProducts = this.test.getCarts();
    // $("#hoan-tat-don-hang").modal("show");
  }

}
