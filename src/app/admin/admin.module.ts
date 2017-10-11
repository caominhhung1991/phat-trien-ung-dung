import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Ng2FileInputModule } from 'ng2-file-input';
// module
import { AdminRoutingModule } from './admin-routing.module';
// component
import { AdminComponent } from './admin/admin.component';
import { QuanLyDonHangComponent } from './quan-ly-don-hang/quan-ly-don-hang.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { DoanhThuComponent } from './thongke/doanh-thu/doanh-thu.component';
import { GoBackComponent } from './../components/go-back/go-back.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { ChiTietDonHangComponent } from './chi-tiet-don-hang/chi-tiet-don-hang.component';
import { ThemSanPhamComponent } from './quan-ly-san-pham/them-san-pham/them-san-pham.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AdminRoutingModule,
    RouterModule,
    Ng2FileInputModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    QuanLyDonHangComponent, 
    QuanLySanPhamComponent, 
    DoanhThuComponent,
    GoBackComponent,
    NavAdminComponent,
    ChiTietDonHangComponent,
    ThemSanPhamComponent
  ]
})
export class AdminModule { }
