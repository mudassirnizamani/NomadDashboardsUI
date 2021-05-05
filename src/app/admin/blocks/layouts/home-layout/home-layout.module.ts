import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AdminHomeLayoutComponent],
  imports: [CommonModule, RouterModule, MDBBootstrapModule],
})
export class HomeLayoutModule {}
