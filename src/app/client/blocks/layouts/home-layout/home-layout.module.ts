import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientHomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeLayoutModule { }
