import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user: User;
  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.user = this.userDataService.getUserData()
    console.log(this.user)
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.opacity = "1";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }
  menuClick(item: string) {
    this.closeNav()
    console.log(item)
  }
}
