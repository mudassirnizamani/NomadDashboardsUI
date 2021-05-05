import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AdminUsersModule } from './users/users.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    AdminUsersModule,
    FormsModule,
    ReactiveFormsModule,
    UserProfileModule
  ],
  exports: [
    HomeModule,
    AdminUsersModule,
    UserProfileModule
  ],
})
export class FeatureModule { }
