import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/models/user.model';
import { AlertifyService } from 'src/app/service/alertify.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    //debugger;
    console.warn(loginForm);

    this.authService.authUser(loginForm.value).subscribe(
      (response: UserForLogin | any) => {
        console.log(response);
        const user = response;
        localStorage.setItem('token', user.token);
        localStorage.setItem('userName', user.userName);
        this.alertifyService.success('login successfull..');
        this.router.navigate(['/']);
      },
      //error => {
      //   console.log(error);
      //   this.alertifyService.error(error.error)
      // }
    )

    //const token = this.authService.authUser(loginForm.value);
    // if (token) {
    //   localStorage.setItem('token', token.userName);
    //   this.alertifyService.success('login successfull..');
    // }
    // else {
    //   this.alertifyService.error('invalid credentials!!');
    // }
  }
}
