import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountsService } from './services/accounts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EmployerSignupComponent } from './components/employer-signup/employer-signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, EmployerSignupComponent],
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
