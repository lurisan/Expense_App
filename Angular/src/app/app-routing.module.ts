import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'addExpense',
  component: AddExpenseComponent
},
{
  path: 'editExpense',
  component: EditExpenseComponent
},
{
  path: 'logout',
  component: LogoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
