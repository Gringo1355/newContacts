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


const appRoutes: Routes = [
  { path: 'users/allUsers', component: AllUsersComponent },
  { path: 'users/addNew', component: NewUserComponent },
  { path: '', component: AllUsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AllUsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
