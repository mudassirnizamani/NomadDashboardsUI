import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AdminUsersModule } from './admin/feature/users/users.module';
import { UserProfileModule } from './admin/feature/user-profile/user-profile.module';
import { EmployerModule } from './employer/employer.module';
import { EmployeeModule } from './employee/employee.module';

// Variables - Mudasir Ali
const CustomModules = [CoreModule, FeatureModule, BlocksModule];

const AdminModules = [AdminModule, AdminUsersModule, UserProfileModule];

const EmployerModules = [EmployerModule];

const EmployeeModules = [EmployeeModule];

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
      timeOut: 4000,
      progressBar: true,
    }),
    CustomModules,
    AdminModules,
    EmployerModules,
    EmployeeModules,
  ],
  providers: [AccountsService, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
