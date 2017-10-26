import { Component, OnInit, Input } from '@angular/core';
import { MainService } from './../../service/main.service';

@Component({
  selector: 'app-nav-guest',
  templateUrl: './nav-guest.component.html',
  styleUrls: ['./nav-guest.component.css']
})
export class NavGuestComponent implements OnInit {
  @Input() set numOfProduct(num) {
    this.numProduct = num;
    console.log("num");
    console.log(this.numProduct);
  };
  numProduct:number;
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.numProduct = 0;
  }

}
 