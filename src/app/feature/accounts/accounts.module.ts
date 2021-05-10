import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountsService } from './services/accounts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EmployeeSignupComponent } from './components/employee-signup/employee-signup.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent,  EmployeeSignupComponent, ClientSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule,
  ],
  providers: [AccountsService],
  exports: [],
})
export class AccountsModule {}
