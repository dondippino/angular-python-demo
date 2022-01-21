import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public services: Services) { }
  loading = false;
  loginLabel: any = this.loading ? "Please wait..." : "Log In";

  request = {
    "Username": "",
    "Password": ""
  }

  ngOnInit(): void {
  }

  onChangeUsername(event: any) {
    this.request.Username = event.target.value;
  }
  onChangePassword(event: any) {
    this.request.Password = event.target.value;
  }

  async onSubmit() {
    this.loading = true;
    let x = await this.services.login(this.request);
    this.loading = false;
  }

}
