import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserHttpService} from "../../../service/user-http.service";
import User from "../../../model/User";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  createUserForm: FormGroup;
  createdUser: User;
  constructor(private fb: FormBuilder, private userHttpService: UserHttpService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.createUserForm = this.fb.group({
      fullName:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email])
    })
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

     this.userHttpService.createUser(this.createUserForm.value).subscribe(data => this.createdUser = data)
  }

}
