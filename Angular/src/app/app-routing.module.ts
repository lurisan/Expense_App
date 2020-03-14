import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExpenseSheetComponent } from './expense-sheet/expense-sheet.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.service';
import { LayoutComponent } from './layout/layout/layout.component';

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
  path: 'expense-app',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'expenseSheet',
    component: ExpenseSheetComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }]
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
