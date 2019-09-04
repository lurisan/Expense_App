import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../services/user-data.service";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})

export class ProfileComponent implements OnInit {
  private userData: User;
  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.userDataService.userDataObservable.subscribe(user => {
      this.userData = user;
      console.log(this.userData);
    });
  }

  logout() {
    this.router.navigateByUrl('/login')
  }
}
