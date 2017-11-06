import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
// Module
import { ComponentModule } from './../components/component.module';
import { AdminModule } from './../admin/admin.module'
//import component
import { HomePageComponent} from './home-page/home-page.component';
import { NavGuestComponent } from './nav-guest/nav-guest.component';
import { SliderGuestComponent } from './slider-guest/slider-guest.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanPhamTuongTuComponent } from './san-pham-tuong-tu/san-pham-tuong-tu.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { ModalProductDetailComponent } from './../components/modals/modal-product-detail/modal-product-detail.component';
import { HoanTatThanhToanComponent } from './hoan-tat-thanh-toan/hoan-tat-thanh-toan.component';
import { LoginComponent } from './../components/login/login.component';

import { SignUpComponent} from './../components/sign-up/sign-up.component';
import { QuanLyTaiKhoanComponent } from './quan-ly-tai-khoan/quan-ly-tai-khoan.component';
import { SuaThongTinComponent } from './sua-thong-tin/sua-thong-tin.component';
import { DoiPasswordComponent } from './doi-password/doi-password.component';
import { LichSuDonHangComponent } from './lich-su-don-hang/lich-su-don-hang.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule
  ],
  declarations: [
    HomePageComponent,
    NavGuestComponent,
    SliderGuestComponent,
    ProductsComponent,
    ProductDetailComponent,
    SanPhamTuongTuComponent,
    ShoppingCartComponent,
    ModalProductDetailComponent,
    HoanTatThanhToanComponent,
    LoginComponent,
    SignUpComponent,
    QuanLyTaiKhoanComponent,
    DoiPasswordComponent,
    LichSuDonHangComponent,
    CommentComponent
  ],
  exports: [
    HomePageComponent,
    NavGuestComponent,
    SliderGuestComponent,
    ProductsComponent,
    ProductDetailComponent,
    SanPhamTuongTuComponent,
    ShoppingCartComponent,
    ModalProductDetailComponent,
    HoanTatThanhToanComponent,
    LoginComponent,
    SignUpComponent,
    QuanLyTaiKhoanComponent,
    DoiPasswordComponent,
    LichSuDonHangComponent,
    SuaThongTinComponent,
    CommentComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GuestModule { }
