import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  addUser(user: User) {
    let usersData;
    if (localStorage.getItem('user')) {
      usersData = JSON.parse(localStorage.getItem('user') as string);
      usersData = [user, ...usersData];
    } else {
      usersData = [user];
    }
    localStorage.setItem('user', JSON.stringify(usersData));
  }
}
