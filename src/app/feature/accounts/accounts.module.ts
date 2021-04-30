import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountsService } from './services/accounts.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule],
  providers: [AccountsService],
  exports: [
    SigninComponent,
    SignupComponent,
  ]
})
export class AccountsModule {}
