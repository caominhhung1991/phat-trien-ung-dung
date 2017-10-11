import { Component, OnInit } from '@angular/core';
// service
import { AdminService } from './../../service/admin.service';

@Component({
  selector: 'app-quan-ly-don-hang',
  templateUrl: './quan-ly-don-hang.component.html',
  styleUrls: ['./quan-ly-don-hang.component.css']
})
export class QuanLyDonHangComponent implements OnInit {
  private donhangsChuaXuLy: any;
  private selectedDonhang: any;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getDonHangs().then(res => {
      this.donhangsChuaXuLy = res;
      this.selectedDonhang = this.donhangsChuaXuLy[0];
    })
  }

  onSelect(donhang) {
    this.selectedDonhang = donhang;
  }

}
