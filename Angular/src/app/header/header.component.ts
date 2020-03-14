import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.opacity = "1";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }
  
  menuClick(item: string) {
    this.closeNav()
    this.router.navigateByUrl('/expense-app/' + item)
  }
}
