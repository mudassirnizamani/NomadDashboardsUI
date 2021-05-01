import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Installed Modules - Mudasir Ali
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';

// Custom Modules - Mudasir Ali
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { BlocksModule } from './blocks/blocks.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsService } from './feature/accounts/services/accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

// Variables - Mudasir Ali

const CustomModules = [CoreModule, FeatureModule, BlocksModule];


const ThirdPartyModules = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3500,
      progressBar: true,
    }),
    CustomModules,
    AdminModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
