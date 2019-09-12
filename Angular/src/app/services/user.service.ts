import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Signin } from '../models/signin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class UserService {

  private userRef: AngularFirestoreCollection<User>;
  private signinRef: AngularFirestoreCollection<Signin>;
  private userData = new BehaviorSubject(null);
  private userDataObservable = this.userData.asObservable();

  constructor(private firestore: AngularFirestore) {
    this.userRef = this.firestore.collection<User>(environment.user);
    this.signinRef = this.firestore.collection<Signin>(environment.user);
  }

  postUser(userData: User): Promise<DocumentReference> {
    return this.userRef.add(userData)
  }

  getUser(): Observable<any> {
    return this.signinRef.get();
  }

  putUser(userData: User): Promise<DocumentReference> {
    return null
  }

  deleteUser(userData: User): Promise<DocumentReference> {
    return null
  }

  setUserData(user: User) {
    this.userData.next(user);
  }

  getUserData(): User {
    return this.userData.value;
  }

  getUserObservable(): Observable<any> {
    return this.userDataObservable;
  }
}
