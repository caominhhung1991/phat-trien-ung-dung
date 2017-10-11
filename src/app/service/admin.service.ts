import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

const donhangs = [
  {
    'donhang_id': '00001',
    'status': 'Đang chờ xử lý',
    'order_date': '2017-08-13 20:01:32',
    'address': '12 Nguyễn Văn Bảo, Gò Vấp, Tp.HCM',
    'transport': 'Vận chuyển Tiết Kiệm (dự kiến giao hàng vào Thứ tư, 16/08/2017) Miễn phí vận chuyển',
    'payment': 'Thanh toán tiền mặt khi nhận hàng',
    'products': [
      {
        'product_name': 'Thương Hiệu - Mở Lối Thành Công',
        'price': '84000',
        'quantity': '1',
        'sale': '0'
      },
      {
        'product_name': '[Gift] - Mã Coupon B2SVPP05 Giảm Thêm 5% Cho Đơn Hàng Văn Phòng Phẩm (Hạn Sử Dụng 31.08)',
        'price': '0',
        'quantity': '1',
        'sale': '0'
      }
    ]
  },
  {
    'donhang_id': '00002',
    'status': 'Đang chờ xử lý',
    'order_date': '2017-08-14 20:01:32',
    'address': '33 Nguyễn Văn Bảo, Gò Vấp, Tp.HCM',
    'transport': 'Vận chuyển Tiết Kiệm (dự kiến giao hàng vào Thứ tư, 16/08/2017) Miễn phí vận chuyển',
    'payment': 'Thanh toán tiền mặt khi nhận hàng',
    'products': [
      {
        'product_name': 'Anne Tóc Đỏ Dưới Chái Nhà Xanh',
        'price': '30000',
        'quantity': '1',
        'sale': '0'
      },
      {
        'product_name': 'Tuyển tập TS Lê Thẩm Dương: Cảm Xúc Là Kẻ Thù Số Một Của Thành Công (Bản Đặc Biệt)',
        'price': '175000',
        'quantity': '1',
        'sale': '0'
      }
    ]
  }
]

@Injectable()
export class AdminService {
  private result:any;
  private donhang:any;

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

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  getDonHangs(): Promise<any> {
    return Promise.resolve(donhangs); 
  }

  getDonHang(id: number) {
    return this.getDonHangs().then(donhangs => {
      donhangs.find(donhang => donhang.donhang_id === id);
    })
  }
}