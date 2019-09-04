import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router, private userDataService: UserDataService) {
  }

  canActivateChild() {
    let userData = this.userDataService.getUserData();
    if (userData)
      return true
    this.router.navigateByUrl('/login');
    return false;
  }
}