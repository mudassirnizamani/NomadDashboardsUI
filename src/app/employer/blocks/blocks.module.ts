import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutModule } from './layouts/home-layout/home-layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeLayoutModule],
  exports: [HomeLayoutModule],
})
export class BlocksModule {}
