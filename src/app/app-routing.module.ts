import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeLayoutComponent } from './admin/blocks/layouts/home-layout/home-layout.component';
import { AdminHomeComponent } from './admin/feature/home/home.component';
import { AccountsLayoutComponent } from './blocks/layouts/accounts-layout/accounts-layout.component';
import { SigninComponent } from './feature/accounts/components/signin/signin.component';
import { SignupComponent } from './feature/accounts/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsLayoutComponent,
    children: [
      {
        path: '', component: SignupComponent,
      },
      {
        path: 'signup', component: SignupComponent,
      },
      {
        path: 'signin', component: SigninComponent,
      },
    ]
  },
  {
    path: 'admin',
    component: AdminHomeLayoutComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'home',
        component: AdminHomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
