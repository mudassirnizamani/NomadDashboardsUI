import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
