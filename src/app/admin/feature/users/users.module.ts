import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from './users.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserItemComponent } from './components/user-item/user-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserItemComponent, AdminUsersComponent],
  imports: [CommonModule, MDBBootstrapModule, RouterModule],
})
export class AdminUsersModule {}
