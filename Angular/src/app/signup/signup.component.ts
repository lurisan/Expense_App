import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { SignupService } from '../services/signup.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})

export class SignupComponent implements OnInit {
  private signUpData: User;
  private signUpForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    passwords: new FormGroup(
      {
        password: new FormControl("", [
          Validators.required,
          Validators.pattern(
            new RegExp(
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})"
            )
          )
        ]),
        confirmPassword: new FormControl("", [Validators.required])
      },
      [this.passwordConfirming]
    ),
    firstName: new FormControl("", [Validators.required]),
    middleName: new FormControl(""),
    lastName: new FormControl("", [Validators.required]),
    emailId: new FormControl("", [Validators.email]),
    mobileNumber: new FormControl("", [
      Validators.required
      // Validators.pattern(new RegExp("^[+]{1}[0-9]{1,2}[ ][0-9]{10}$"))
    ])
  });

  constructor(private router: Router, private signUpService: SignupService) {
    this.signUpData = {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      password: "",
      emailId: "",
      mobileNumber: "",
    };
  }

  ngOnInit() { }

  passwordConfirming(passwords: FormGroup) {
    if (passwords.get("password").value === passwords.get("confirmPassword").value && (passwords.get("password").value !== "" && passwords.get("confirmPassword").value !== ""))
      return null;
    return { mismatch: true };
  }

  continue() {
    this.signUpData.emailId = this.signUpForm.value.emailId;
    this.signUpData.firstName = this.signUpForm.value.firstName;
    this.signUpData.middleName = this.signUpForm.value.middleName;
    this.signUpData.lastName = this.signUpForm.value.lastName;
    this.signUpData.username = this.signUpForm.value.username;
    this.signUpData.password = this.signUpForm.value.passwords.password;
    this.signUpData.mobileNumber = this.signUpForm.value.mobileNumber;
    this.signUpService.signup(this.signUpData).then(data => {
      if (data.id) this.router.navigateByUrl("/login");
    })
      .catch(err => {
        console.log(err);
      });
  }

  cancel() {
    this.router.navigateByUrl('/login')
  }
}
