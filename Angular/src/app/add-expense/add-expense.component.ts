import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { ExpenseSheet, DailyExpense, MonthlyExpense, YearlyExpense } from '../models/expense';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  private expenseSheet: ExpenseSheet;
  private userData: User;
  private expenseFlag: Array<boolean> = [false, false, false, false];
  private fieldName: string = "Add";
  private dailyExpenseSheet: Array<any> = [
    { date: "", expenseArray: [0], total: 0 }
  ];

  constructor(private userService: UserService, private expensesService: ExpensesService) {
    this.expenseSheet = {
      username: "",
      expenses: [],
      total: 0
    }
    this.userData = this.userService.getUserData();
    this.dailyExpenseSheet[0].date = this.getCurrentDate()
  }

  ngOnInit() {
    this.expensesService.getExpenseDetails().subscribe(querySnapshot => {
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        let data = querySnapshot.docs[i].data();
        if (this.userData)
          if (this.userData.username === data.username) {
            this.expenseSheet = data
            break;
          }
      }
    })
  }

  remove(i, j, name) {
    if (name === 'Remove Field') {
      this.dailyExpenseSheet[i].expenseArray.splice(j, 1);
      this.fieldName = "Save";
    } else {
      this.dailyExpenseSheet.splice(i, 1);
    }
  }

  add(i, fieldName) {
    if (fieldName === "Add") {
      this.dailyExpenseSheet[i].expenseArray.push(0)
      this.fieldName = "Save";
    } else if (fieldName === "Save") {
      this.expenseFlag[i] = false;
      this.dailyExpenseSheet[i].total = this.dailyExpenseSheet[i].expenseArray.reduce((acc, cur) => acc + cur, 0)
      this.fieldName = "Add";
    } else if (fieldName === 'Add Expense') {
      const dailyExpense = { date: this.getdate(this.dailyExpenseSheet[this.dailyExpenseSheet.length - 1].date), expenseArray: [0], total: 0 };
      this.dailyExpenseSheet.push(dailyExpense);
    }
  }

  addToArray(i, j, value) {
    this.dailyExpenseSheet[i].expenseArray[j] = parseFloat(value);
  }

  getdate(dateI: string) {
    let date = new Date(dateI)
    date.setDate(date.getDate() + 1)
    return date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).slice(-2)) + '-' + ('0' + date.getDate()).slice(-2);
  }

  saveExpense() {
    this.expenseSheet.username = this.userData.username;
    let monthlyExpense = new MonthlyExpense();
    let yearlyExpense = new YearlyExpense();

    this.dailyExpenseSheet.forEach(expense => {
      let dailyExpense = new DailyExpense();
      dailyExpense.day = expense.date.split('-')[2];
      dailyExpense.dayExpenses = expense.expenseArray;
      dailyExpense.dayTotal = expense.expenseArray.reduce((acc, cur) => acc + cur, 0);

      monthlyExpense.month = expense.date.split('-')[1];
      monthlyExpense.monthlyExpense.push(dailyExpense);
      monthlyExpense.monthTotal = monthlyExpense.monthTotal + dailyExpense.dayTotal;
    })

    yearlyExpense.year = this.dailyExpenseSheet[0].date.split('-')[0];
    yearlyExpense.yearlyExpense.push(monthlyExpense);
    yearlyExpense.yearTotal = yearlyExpense.yearTotal + monthlyExpense.monthTotal;

    this.expenseSheet.expenses.push(yearlyExpense)
    this.expensesService.postExpenseDetails(this.expenseSheet).then(data => {
      if (data.id) console.log("done");
    }).catch(err=>{
      console.log(err)
    });
  }

  getCurrentDate() {
    let today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var y = today.getFullYear();
    return y + '-' + m + '-' + d;
  }
}
