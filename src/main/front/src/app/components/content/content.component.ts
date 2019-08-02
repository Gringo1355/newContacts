import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users:string;
  constructor(private HttpClient : HttpClient) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    return this.HttpClient.get<string>("/api/getAllUsers").subscribe(data => this.users = data);
  }

}
