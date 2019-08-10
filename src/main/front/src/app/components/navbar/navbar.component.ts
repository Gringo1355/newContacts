import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {DataExchangeService} from "../../service/data-exchange.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id:number;
  private subscription: Subscription;
  constructor(private dataExchangeService: DataExchangeService) { }

  ngOnInit() {

  }
}
