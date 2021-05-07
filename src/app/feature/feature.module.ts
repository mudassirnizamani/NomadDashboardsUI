import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AccountsModule],
  exports: [AccountsModule],
})
export class FeatureModule {}
