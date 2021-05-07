import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerHomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmployerHomeLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeLayoutModule {}
