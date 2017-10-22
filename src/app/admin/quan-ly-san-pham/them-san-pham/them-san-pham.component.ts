import { Component, OnInit } from '@angular/core';
import { Ng2FileInputService, Ng2FileInputAction } from 'ng2-file-input';
// service
import { MainService } from './../../../service/main.service';
// Object
import { Product } from './../../../objects/product';
// Component 
import { AllProductComponent } from './../all-product/all-product.component';

// declare variable jquery and $ to use jquery plugin
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.css']
})

export class ThemSanPhamComponent implements OnInit {

  product = new Product(
     "", "", "", "", "", "", "", "", "", ""
  );

constructor(
  private mainService: MainService
) { 
}

onSubmit() {
  console.log(this.product);
  this.mainService.addProduct(this.product).subscribe(res => {
    console.log("Thêm sản phẩm thành công!");
    let check = confirm("Thêm sản phẩm thành công! Nhấn Yes để xoá thông tin cũ, No để giữ lại thông tin");
    if(check == true) {
      this.product = new Product(
        "", "", "", "", "", "", "", "", "", ""
      );
      $("#product_id").focus();
    } else {
      this.product.product_id = "";
      $("#product_id").focus();
    }
  })
}

ngOnInit() {
  // console.log(this.product);
}

}
