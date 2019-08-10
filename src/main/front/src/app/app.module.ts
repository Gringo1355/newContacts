import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Router, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AllUsersComponent } from './components/content/all-users/all-users.component';
import {NewUserComponent} from "./components/content/new-user/new-user.component";
import { ReactiveFormsModule } from '@angular/forms';
import { UserWiewComponent } from './components/content/user-wiew/user-wiew.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AllUsersComponent,
    NewUserComponent,
    UserWiewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
