import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Signup } from "../models/signup";
import { UserService } from "../services/user.service";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

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
  private signup: Signup;
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

  signupRef: AngularFirestoreCollection<Signup>;

  constructor(
    private userService: UserService,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.signupRef = this.firestore.collection<Signup>("signup");
    this.signup = {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      password: "",
      emailId: "",
      mobileNumber: "",
    };
  }

  ngOnInit() {}

  passwordConfirming(c: FormGroup) {
    if (
      c.get("password").value === c.get("confirmPassword").value &&
      (c.get("password").value !== "" && c.get("confirmPassword").value !== "")
    ) {
      return null;
    }
    return { mismatch: true };
  }

  continue() {
    this.signup.emailId = this.signUpForm.value.emailId;
    this.signup.firstName = this.signUpForm.value.firstName;
    this.signup.middleName = this.signUpForm.value.middleName;
    this.signup.lastName = this.signUpForm.value.lastName;
    this.signup.username = this.signUpForm.value.username;
    this.signup.password = this.signUpForm.value.passwords.password;
    this.signup.mobileNumber = this.signUpForm.value.mobileNumber;
    this.signupRef
      .add(this.signup)
      .then(data => {
        console.log(data);
        if (data.id) this.router.navigateByUrl("/login");
      })
      .catch(err => {
        console.log(err);
      });
  }

  cancel() {
    this.userService.userRead();
  }
}
