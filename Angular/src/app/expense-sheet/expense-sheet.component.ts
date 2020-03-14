import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { ExpenseSheet, DailyExpense, MonthlyExpense, YearlyExpense } from '../models/expense';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-expense-sheet',
  templateUrl: './expense-sheet.component.html',
  styleUrls: ['./expense-sheet.component.css']
})
export class ExpenseSheetComponent implements OnInit {
  private dailyExpense: DailyExpense;
  private monthlyExpense: MonthlyExpense;
  private yearlyExpense: YearlyExpense;
  private dailyExp: number[] = [1, 2, 3, 4, 5];
  private thnum: number = this.dailyExp.length + 1;
  private total: number = 0;
  private edit: boolean[] = [];
  private editMode: boolean = false;
  private add: boolean = false;
  private singleValAdd: number = 0;

  constructor() { }

  ngOnInit() {
    this.updateSum();
    this.edit = this.dailyExp.map(val => true);
  }

  updateSum() {
    this.dailyExp.push(this.singleValAdd);
    this.singleValAdd = 0;
    this.add = false;
    this.dailyExp = this.dailyExp.filter(val => val !== 0 && val);
    this.thnum = (this.editMode) ? this.dailyExp.length : 2;

    if (this.thnum - 1) this.total = this.dailyExp.reduce((a, b) => a + b);

    this.edit = this.dailyExp.map(val => true);
  }

  addCell() {
    if (this.dailyExp[this.dailyExp.length - 1] !== 0) {
      this.dailyExp.push(0);
      if (this.editMode)
        this.thnum = this.dailyExp.length;
      else {
        this.thnum = this.thnum + 1;
        this.add = true;
      }
      this.edit = this.dailyExp.map(val => true);
    }
  }

  trackActiveBox(index: any, item: any) {
    return index;
  }

  enableEdit(index: number) {
    this.edit[index] = false;
  }

  enableEditMode(state: boolean) {
    this.editMode = state;
    if (state) this.thnum = this.dailyExp.length;
  }

}

