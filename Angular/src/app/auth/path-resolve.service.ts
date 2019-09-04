import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathResolveService implements Resolve<string | null> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | null {
    this.router.navigateByUrl('/expense-app/home')
    return "false"
  }

  constructor(private router: Router) { }
}
