import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from "../../model/User";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
