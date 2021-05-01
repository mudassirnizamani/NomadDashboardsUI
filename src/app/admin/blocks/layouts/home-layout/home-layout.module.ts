import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeLayoutComponent } from './home-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminHomeLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeLayoutModule {}
