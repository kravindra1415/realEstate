import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  BaseApiUrl = environment.baseApiUrl;

  authUser(user: any) {
    return this._httpClient.post(this.BaseApiUrl + 'api/account/login', user)

    // let userArray: any = [];
    // if (localStorage.getItem('user')) {
    //   userArray = JSON.parse(localStorage.getItem('user') as string);
    // }
    // return userArray.find(p => p.userName === user.userName && p.password === user.password);
  }

  registerUser(user: UserForRegister) {
    return this._httpClient.post(this.BaseApiUrl + 'api/account/register', user)
  }
}
