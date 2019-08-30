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
    this.wrong = "wrong";
    if (this.signin.username === "") this.message = "Enter Username";
    else if (this.signin.password === "") this.message = "Enter Password";
    else
      this.authenticationService.authenticate().subscribe(data => {
        data.forEach(element => {
          if (element.username === this.signin.username)
            if (element.password === this.signin.password) {
              this.router.navigateByUrl("/home");
            } else {
              this.message = "Wrong Password";
            }
          else {
            this.message = "Unnknown Username";
          }
        });
      });
  }

  signup() {
    this.router.navigateByUrl("/signup");
  }
}
