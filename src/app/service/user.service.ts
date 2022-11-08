import { Injectable } from '@angular/core';
import { UserForRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  addUser(user: UserForRegister) {
    // let usersData;
    // if (localStorage.getItem('user')) {
    //   usersData = JSON.parse(localStorage.getItem('user') as string);
    //   usersData = [user, ...usersData];
    // } else {
    //   usersData = [user];
    // }
    // localStorage.setItem('user', JSON.stringify(usersData));
  }

}
