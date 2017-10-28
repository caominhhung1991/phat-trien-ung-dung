import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
// service
import { AdminService } from './../../service/admin.service';
import { MainService } from './../../service/main.service';
import { GuestService } from './../../service/guest.service';

@Component({
  selector: 'app-chi-tiet-don-hang',
  templateUrl: './chi-tiet-don-hang.component.html',
  styleUrls: ['./chi-tiet-don-hang.component.css']
})
export class ChiTietDonHangComponent implements OnInit {
  @Input() donhang:any = {};
  products:any = new Array();
  // private donhang: any;
  constructor(
    private mainService: MainService,
    private guestService: GuestService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // order - access, update, delete order
  accessOrderByAdmin() {
    let check = confirm("Bạn có muốn chấp nhận đơn hàng này?");
    if(check) {
      this.donhang.status = "Đang chờ giao";
      this.donhang.access_person = (JSON.parse(localStorage.getItem("currentUser"))).name;
      this.guestService.updateOrderByAdmin(this.donhang).then(res => {
        console.log(res);
        alert("success!")
        location.reload();
      }, res => console.log(res));
    }
  }

  updateOrderByAdmin() {
    let check = confirm("Bạn có muốn cập nhật lại đơn hàng?");
    if(check) {
      this.guestService.updateOrderByAdmin(this.donhang).then(res => {
        console.log(res);
        alert("success!")
        // location.reload();
      }, res => console.log(res));
    }
  }

  deleteOrderByAdmin() {
    let check = confirm("Bạn có muốn huỷ bỏ đơn hàng?");
    if(check) {
      this.donhang.status = "Huỷ";
      this.guestService.updateOrderByAdmin(this.donhang).then(res => {
        console.log(res);
        alert("success!")
        location.reload();
      }, res => console.log(res));
    }
  }

  // edit product 
  onAddProduct(product) {
    product.price = product.sub_prod[0].price;
    product.quantity = 1;
    product.total_price = product.price * product.quantity;
    this.donhang.order_detail.push(product);
  }

  removeProduct(index) {
    this.donhang.order_detail.splice(index, 1);
  }

  tinhTien(product) {
    product.total_price = product.quantity*product.price;
    this.tinhTongTien();
  }

  tinhTongTien() {
    this.donhang.tong_tien = 0;
    for(let item of this.donhang.order_detail) {
      this.donhang.tong_tien += item.total_price;
    }
  }

  refresh() {
    location.reload();
  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("products"));
    console.log(this.products);
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.adminService.getDonHang(+params.get('id')))
    //   .subscribe(donhang => this.donhang = donhang);
  }

  
}
