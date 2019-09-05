import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { Signin } from "../models/signin";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class LoginComponent implements OnInit {
  private signin: Signin;
  private message: string = "Expense App Login";
  private wrong: string = undefined;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.signin = new Signin();
  }

  submit() {
    if (this.signin.username === "") {
      this.wrong = "wrong"
      this.message = "Enter Username";
    }
    else if (this.signin.password === "") {
      this.wrong = "wrong"
      this.message = "Enter Password";
    }
    else
      this.authenticationService.authenticate().subscribe(querySnapshot => {
        for (let i = 0; i < querySnapshot.docs.length; i++) {
          this.wrong = "wrong"
          let element = querySnapshot.docs[i]
          let data = element.data();
          if (data.username === this.signin.username) {
            if (data.password === this.signin.password) {
              this.userDataService.setUserData(data);
              this.router.navigateByUrl("/expense-app/home");
            } else {
              this.wrong = "wrong";
              this.message = "Wrong Password";
            }
            break;
          }
          else {
            this.wrong = "wrong";
            this.message = "Unknown Username";
          }
        };
      });
  }

  keyUp() {
    this.wrong = undefined;
    this.message = "Expense App Login";
  }

  signup() {
    this.router.navigateByUrl("/signup");
  }
}
