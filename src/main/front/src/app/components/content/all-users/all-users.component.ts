import { Component, OnInit } from '@angular/core';
import User from "../../../model/User";
import {formatDate} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {UserHttpService} from "../../../service/user-http.service";
import {DataExchangeService} from "../../../service/data-exchange.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users: User[] = [];
  constructor(private userHttpService: UserHttpService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    return this.userHttpService.getAllUsers()
      .subscribe(data => this.users = data);
  }

  getNormalDate(str: string){
    return formatDate(new  Date (str), "dd/MM/yyyy", "en-US");
  }

}
