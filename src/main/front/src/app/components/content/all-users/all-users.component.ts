import { Component, OnInit } from '@angular/core';
import User from "../../../model/User";
import {formatDate} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users: User[] = [];
  constructor(private HttpClient : HttpClient) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    return this.HttpClient.get<User[]>("/api/getAllUsers").subscribe(data => this.users = data);
  }

  getNormalDate(str: string){

    return formatDate(new  Date (str), "dd/MM/yyyy", "en-US");
  }

}
