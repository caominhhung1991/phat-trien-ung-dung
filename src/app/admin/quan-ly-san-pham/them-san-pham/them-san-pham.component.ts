import { Component, OnInit } from '@angular/core';
import { Ng2FileInputService, Ng2FileInputAction } from 'ng2-file-input';
// service
import { MainService } from './../../../service/main.service';
import { Product } from './../../../components/product/product';


@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.css']
})
export class ThemSanPhamComponent implements OnInit {

  // product: Product;
  product = {
    product_name: "",
    product_size: "",
    product_price: "",
    product_madein: "",
    product_decription: "",
    product_instruction: "",
    product_comment: [
      {
        timestamp: "",
        user_id: "",
        message: ""
      }
    ],
    product_color: "",
    product_company: "",
    product_like: "",
    product_kind: "",
  }

  constructor(
    private mainService: MainService
  ) { }

  onSubmit() {
    console.log(this.product);
    this.mainService.addProduct(this.product).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
