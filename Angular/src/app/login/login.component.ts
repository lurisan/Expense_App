import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { SignIn } from "../models/signin";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private signin: SignIn;
  private message: string = "Expense App Login";
  private wrong: string = undefined;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.signin = new SignIn();
  }

  submit() {
    this.wrong = undefined;
    let status = this.authenticationService.authenticate(this.signin);
    if (status) this.router.navigateByUrl("/home");
    else this.errorLogin(this.signin);
  }

  signup() {
    this.router.navigateByUrl("/signup");
  }

  errorLogin(data: SignIn) {
    this.wrong = "wrong";
    if (this.authenticationService.validateUsername(data.username)) {
      this.message = "Wrong Username";
    } else if (this.authenticationService.validatePassword(data.username)) {
      this.message = "Wrong Password";
    }
  }
}
