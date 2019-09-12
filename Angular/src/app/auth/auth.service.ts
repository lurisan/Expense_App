import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    let userData = this.userService.getUserData();
    if (userData)
      return true
    this.router.navigateByUrl('/login');
    return false;
  }
}