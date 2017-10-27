import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// service
import { GuestService } from './../../service/guest.service';
// component
import { ShoppingCartComponent } from './../../components/shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-hoan-tat-thanh-toan',
  templateUrl: './hoan-tat-thanh-toan.component.html',
  styleUrls: ['./hoan-tat-thanh-toan.component.css'], 
  // providers: [ShoppingCartComponent]
})
export class HoanTatThanhToanComponent implements OnInit {
  products:any;
  ttdh:any = {};
  
  constructor(
    // private shoppingCartComponent: ShoppingCartComponent
    private guestService: GuestService,
    private location: Location,
    private router: Router
  ) { }

  TinhTongTienCart() {
    console.log("\nTính tổng tiền cart") 
    this.products.tong_tien = 0;
    for(let item of this.products) {
      this.products.tong_tien += item.total_price;
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.checkFormInput(this.ttdh);
    // for(let item of JSON.parse(this.ttdh.order_detail)) {
    //   console.log(item);
    // }
    // console.log(this.ttdh);
  }
  messageError:any = {};
  checkFormInput(form) {
    if(form.name == "" || form.name == undefined) {
      this.messageError.name = true;
    } else if(form.phone == "" || form.phone == undefined) {
      this.messageError.phone = true;
    } else if(form.address == "" || form.address == undefined) {
      this.messageError.address = true;
    } else if(form.detail == "" || form.detail == undefined) {
      this.messageError.detail = true;
    } else if(this.products.length == 0) {
      let check = confirm("Bạn chưa chọn sản phẩm nào. Chọn Ok để khám phá các sản phẩm khác!.");
      if(check == true) {
        this.router.navigate(["/home-page"]);
      }
    } else {
      this.ttdh.order_detail = this.products;
      this.guestService.addOrderFromGuest(this.ttdh).then(res => {
        console.log(res);
        localStorage.removeItem('cart');
        let check = confirm("Chúc mừng bạn đã đặt hàng thành công. Chọn Ok để khám phá các sản phẩm khác!.");
        if(check == true) {
          this.router.navigate(["/home-page"]);
        }
        // this.location.back();
      }, res => console.log(res));
    }
  }


  ngOnInit() {
    this.initMessageError();
    this.products = JSON.parse(localStorage.getItem("cart")) ;
    this.TinhTongTienCart();
  }

  initMessageError() {
    this.messageError = {
      name: false,
      phone: false,
      address: false,
      detail: false
    }
  }
  
}
