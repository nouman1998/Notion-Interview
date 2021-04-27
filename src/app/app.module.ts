import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
