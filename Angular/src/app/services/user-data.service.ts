import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  userData = new BehaviorSubject(null);
  userDataObservable = this.userData.asObservable();

  constructor() { }

  setUserData(user: User) {
    this.userData.next(user);
  }

  getUserData() {
    return this.userData.value;
  }
}
