import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  imports: [
    CommonModule
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
    HoanTatThanhToanComponent
  ]
})
export class GuestModule { }
