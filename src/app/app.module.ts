import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
