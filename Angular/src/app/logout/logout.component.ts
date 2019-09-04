import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private UserDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.UserDataService.setUserData(null);
  }
  click(option: string) {
    if (option === 'yes')
      this.router.navigateByUrl('/login')
    else
      this.router.navigateByUrl('/expense-app')
  }
}
