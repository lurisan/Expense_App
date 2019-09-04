import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userDataService: UserDataService) {
  }

  canActivate() {
    let userData = this.userDataService.getUserData();
    if (userData)
      return true
    this.router.navigateByUrl('/login');
    return false;
  }
}