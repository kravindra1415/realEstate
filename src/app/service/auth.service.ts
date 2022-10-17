import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  authUser(user: any) {
    let userArray: any = [];
    if (localStorage.getItem('user')) {
      userArray = JSON.parse(localStorage.getItem('user') as string);
    }
    return userArray.find(p => p.userName === user.userName && p.password === user.password);
  }
}
