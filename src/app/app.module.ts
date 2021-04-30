import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Installed Modules - Mudasir Ali
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Custom Modules - Mudasir Ali
import { CoreModule } from "./core/core.module";
import { FeatureModule } from './feature/feature.module';
import { BlocksModule } from './blocks/blocks.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Variables - Mudasir Ali

const CustomModules = [
  CoreModule,
  FeatureModule,
  BlocksModule
];

const ThirdPartyModules = [

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CustomModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
