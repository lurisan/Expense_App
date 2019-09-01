import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Signin } from '../models/signin';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private signinRef: AngularFirestoreCollection<Signin>;
  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    this.signinRef = this.firestore.collection<Signin>("signup");
  }

  authenticate(): Observable<any> {
    return this.signinRef.get();
  }
}
