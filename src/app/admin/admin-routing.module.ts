import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
// Component
import { QuanLyDonHangComponent } from './quan-ly-don-hang/quan-ly-don-hang.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { DoanhThuComponent } from './thongke/doanh-thu/doanh-thu.component';
import { ChiTietDonHangComponent } from './chi-tiet-don-hang/chi-tiet-don-hang.component';

const routes: Routes = [
  { path: "admin", component: QuanLySanPhamComponent},
  { path: "quanlydonhang", component: QuanLyDonHangComponent},
  { path: "quanlysanpham", component: QuanLySanPhamComponent},
  { path: "quanlydoanhthu", component: DoanhThuComponent},
  { path: "donhang/:id", component: ChiTietDonHangComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
