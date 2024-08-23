import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
