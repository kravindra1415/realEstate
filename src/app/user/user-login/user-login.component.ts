import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/service/alertify.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertifyService: AlertifyService) {
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    //debugger;
    console.warn(loginForm);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertifyService.success('login successfull..');
    }
    else {
      this.alertifyService.error('invalid credentials!!');
    }
  }
}
