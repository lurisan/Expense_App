import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  userCreate() {
    this.http
      .put(
        "assets/data/user2.json",
        JSON.stringify({
          name: "Nasirul"
        })
      )
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  userRead() {
    this.http.get("assets/data/user2.json").subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  userUpdate() {}

  userDelete() {}
}
