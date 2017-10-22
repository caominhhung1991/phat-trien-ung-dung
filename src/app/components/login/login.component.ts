import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// service
import { MainService } from './../../service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private router: Router,
    private mainService: MainService
  ) { 
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if(username == 'admin' && password == 'admin') {
        this.mainService.setUserLoggedIn();
        this.router.navigate(['admin']);
    }
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {
  }
}
