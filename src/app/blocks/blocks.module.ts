import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsLayoutComponent } from './layouts/accounts-layout/accounts-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccountsLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AccountsLayoutComponent
  ]
})
export class BlocksModule { }
