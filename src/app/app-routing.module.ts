import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeLayoutComponent } from './admin/blocks/layouts/home-layout/home-layout.component';
import { AdminHomeComponent } from './admin/feature/home/home.component';
import { UserProfileComponent } from './admin/feature/user-profile/user-profile.component';
import { AdminUsersComponent } from './admin/feature/users/users.component';
import { AccountsLayoutComponent } from './blocks/layouts/accounts-layout/accounts-layout.component';
import { EmployerHomeLayoutComponent } from './employer/blocks/layouts/home-layout/home-layout.component';
import { EmployerSignupComponent } from './feature/accounts/components/employer-signup/employer-signup.component';
import { SigninComponent } from './feature/accounts/components/signin/signin.component';
import { SignupComponent } from './feature/accounts/components/signup/signup.component';

// Guards - Mudasir Ali
import { AdminGuard } from './core/guards/admin/admin.guard';
import { EmployerGuard } from './core/guards/employer/employer.guard';
import { EmployeeSignupComponent } from './feature/accounts/components/employee-signup/employee-signup.component';
import { EmployeeHomeLayoutComponent } from './employee/blocks/layouts/home-layout/home-layout.component';
import { EmployeeGuard } from './core/guards/employee/employee.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountsLayoutComponent,
    children: [
      {
        path: '',
        component: SignupComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup/employer',
        component: EmployerSignupComponent,
      },
      {
        path: 'signup/employee',
        component: EmployeeSignupComponent
      }
    ],
  },
  {
    path: 'admin',
    component: AdminHomeLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'users/profile/:username',
        component: UserProfileComponent,
      },
    ],
  },
  {
    path: 'employer',
    component: EmployerHomeLayoutComponent,
    canActivate: [EmployerGuard],
    children: [],
  },
  {
    path: 'employee',
    component: EmployeeHomeLayoutComponent,
    canActivate: [EmployeeGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
