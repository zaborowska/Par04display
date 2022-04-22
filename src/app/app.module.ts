import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { Par04Component } from './par04/par04.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Par04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', component: Par04Component }]),
    PhoenixUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
