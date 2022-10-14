import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AlertifyService } from 'src/app/service/alertify.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  //users: any = {};  // if we doesn't have the model defined..
  users: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   emailId: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // });
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.maxLength(10)]]
    }, { validator: this.passwordMatchingValidator }
    )
  }

  userData(): User {
    return this.users = {
      userName: this.userName.value,
      email: this.emailId.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  passwordMatchingValidator(fc: FormGroup): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notMatched: true }
  };

  //this.registrationForm.get('userName')
  //this code is repeated many times so here we use the a function for all the formControls.

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get emailId() {
    return this.registrationForm.get('emailId') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    //debugger
    console.warn(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      //this.users = Object.assign(this.users, this.registrationForm.value);  = > if we have not defined the model yet
      //this.addUser(this.users);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Congrats!!😎👍, you are successfully registered..');
    }
    else {
      this.alertifyService.error('🤦‍♂️🤦‍♂️, kindly provide the required fields..');
    }
  }

  //created a service for this
  // addUser(user) {
  //   let usersData: string[] = [];
  //   if (localStorage.getItem('user')) {
  //     usersData = JSON.parse(localStorage.getItem('user') as string);
  //     usersData = [user, ...usersData];
  //   } else {
  //     usersData = [user];
  //   }
  //   localStorage.setItem('user', JSON.stringify(usersData));
  // }
}
