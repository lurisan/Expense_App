import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ExpenseSheet } from '../models/expense';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expenseSheetRef: AngularFirestoreCollection<ExpenseSheet>;
  private expenseSheetData = new BehaviorSubject(null);
  private expenseSheetDataObservable = this.expenseSheetData.asObservable();

  constructor(private firestore: AngularFirestore) {
    this.expenseSheetRef = this.firestore.collection<ExpenseSheet>(environment.expenseSheet);
  }

  postExpenseDetails(expenseSheetData: ExpenseSheet): Promise<DocumentReference> {
    return this.expenseSheetRef.add(expenseSheetData)
  }

  getExpenseDetails(): Observable<any> {
    return this.expenseSheetRef.get();
  }

  putExpenseDetails(expenseSheetData: ExpenseSheet): Promise<DocumentReference> {
    return null
  }

  deleteExpenseDetails(expenseSheetData: ExpenseSheet): Promise<DocumentReference> {
    return null
  }

  setExpenseSheetData(expenseSheet: ExpenseSheet) {
    this.expenseSheetData.next(expenseSheet);
  }

  getExpenseSheetData(): ExpenseSheet {
    return this.expenseSheetData.value;
  }

  getExpenseSheetObservable(): Observable<any> {
    return this.expenseSheetDataObservable;
  }
}
