import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeeHomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeLayoutModule { }
