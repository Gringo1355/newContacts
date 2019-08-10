import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/content/all-users/all-users.component";
import {NewUserComponent} from "./components/content/new-user/new-user.component";
import {UserWiewComponent} from "./components/content/user-wiew/user-wiew.component";

const routes: Routes = [
  { path: 'users/allUsers', component: AllUsersComponent },
  { path: 'users/addNew', component: NewUserComponent },
  { path: 'users/userWiew/:userId', component: UserWiewComponent},
  { path: '', component: AllUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
