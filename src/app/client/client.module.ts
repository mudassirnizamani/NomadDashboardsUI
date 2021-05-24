import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksModule } from './blocks/blocks.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlocksModule, ],
  exports: [BlocksModule, ],
})
export class ClientModule {}
