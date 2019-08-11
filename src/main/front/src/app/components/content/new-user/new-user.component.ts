import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserHttpService} from "../../../service/user-http.service";
import User from "../../../model/User";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserHttpService} from "../../../service/user-http.service";
import User from "../../../model/User";
import {DataExchangeService} from "../../../service/data-exchange.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  createUserForm: FormGroup;
  createdUser: User;
  id:number;
  subscription: Subscription;
  constructor(private fb: FormBuilder,
              private userHttpService: UserHttpService,
              private location: Location,
              private dataExchangeService: DataExchangeService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.createUserForm = this.fb.group({
      fullName:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email])
    })
  }

  goBack(){
    this.location.back();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.createUserForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.createUserForm.controls;

    if (this.createUserForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

     this.userHttpService.createUser(this.createUserForm.value).subscribe(data => {
       this.createdUser = data;
       this.goBack();
     })
  }
}