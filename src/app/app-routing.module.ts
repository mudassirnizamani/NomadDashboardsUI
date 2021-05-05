import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeLayoutComponent } from './admin/blocks/layouts/home-layout/home-layout.component';
import { AdminHomeComponent } from './admin/feature/home/home.component';
import { UserProfileComponent } from './admin/feature/user-profile/user-profile.component';
import { AdminUsersComponent } from './admin/feature/users/users.component';
import { AccountsLayoutComponent } from './blocks/layouts/accounts-layout/accounts-layout.component';
import { UserGuard } from './core/guards/user/user.guard';
import { SigninComponent } from './feature/accounts/components/signin/signin.component';
import { SignupComponent } from './feature/accounts/components/signup/signup.component';

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
    ],
  },
  {
    path: 'admin',
    component: AdminHomeLayoutComponent,
    canActivate: [UserGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
