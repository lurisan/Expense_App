import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupRef: AngularFirestoreCollection<User>;
  constructor(private firestore: AngularFirestore) {
    this.signupRef = this.firestore.collection<User>("signup");
  }

  signup(signUpData: User) {
    return this.signupRef.add(signUpData)
  }
}
