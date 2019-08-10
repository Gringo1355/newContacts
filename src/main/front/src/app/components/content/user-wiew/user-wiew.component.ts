import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import User from "../../../model/User";
import {UserHttpService} from "../../../service/user-http.service";
import {formatDate, Location} from "@angular/common";

@Component({
  selector: 'app-user-wiew',
  templateUrl: './user-wiew.component.html',
  styleUrls: ['./user-wiew.component.css']
})
export class UserWiewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userHttp : UserHttpService,
              private location: Location) { }

  private user: User;
  private id: number = this.route.snapshot.params.id;
  getUserById(){
    return this.userHttp.getUserById(this.id).subscribe(data => this.user = data);
  }

  getNormalDate(str: string){
    return formatDate(new  Date (str), "dd/MM/yyyy", "en-US");
  }

  goBack(){
      this.location.back();
  }

  ngOnInit() {
    this.getUserById();
  }

}
