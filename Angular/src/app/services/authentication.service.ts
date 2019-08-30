import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(): Observable<any> {
    return this.http.get("assets/data/user.json").pipe(
      map(data => {
        return data;
      })
    );
  }

  validateUsername(): Observable<any> {
    return this.http.get("assets/data/user.json");
  }
}
