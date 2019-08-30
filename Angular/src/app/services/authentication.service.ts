import { Injectable } from "@angular/core";
import { SignIn } from "../models/signin";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor() {}

  authenticate(data: SignIn): boolean {
    if (data.username === "testAdmin2" && data.password === "testPassword2")
      return true;
    else return false;
  }

  validateUsername(username: string): boolean {
    if (username === "testAdmin2") return false;
    else return true;
  }

  validatePassword(password: string): boolean {
    if (password === "testPassword2") return false;
    else return true;
  }
}
