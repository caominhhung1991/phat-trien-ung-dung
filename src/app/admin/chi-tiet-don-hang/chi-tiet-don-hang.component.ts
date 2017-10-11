import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
// service
import { AdminService } from './../../service/admin.service';


@Component({
  selector: 'app-chi-tiet-don-hang',
  templateUrl: './chi-tiet-don-hang.component.html',
  styleUrls: ['./chi-tiet-don-hang.component.css']
})
export class ChiTietDonHangComponent implements OnInit {
  @Input() donhang = {};
  // private donhang: any;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.adminService.getDonHang(+params.get('id')))
    //   .subscribe(donhang => this.donhang = donhang);
  }

  
}
