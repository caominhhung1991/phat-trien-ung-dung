import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//service
import { MainService } from './../service/main.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(
    private mainService: MainService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.router.navigate(['/login']);
    return this.mainService.getUserLoggedIn();
  }
}
