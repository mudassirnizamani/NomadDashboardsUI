import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../models/Signup';
import { Signin } from '../models/Signin';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  Signup(model: Signup) {
    var body = {
      email: model.email.toString(),
      userName: model.userName.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      website: model.website.toString(),
      position: model.position.toString(),
      componyName: model.componyAddress.toString(),
      zipCode: model.zipCode,
      state: model.state.toString(),
      password: model.password.toString(),
      phoneNumber: model.phoneNumber.toString(),
      country: model.country.toString(),
      city: model.city.toString(),
      componyAddress: model.componyAddress.toString(),
    };

    return this.http.post(
      environment.APIBaseUrl + environment.AccountsUrls.Signup,
      body
    );
  }

  Signin(modeL: Signin) {
    var body = {
      userName: modeL.UserName.toString(),
      password: modeL.Password.toString(),
    };

    return this.http.post(
      environment.APIBaseUrl + environment.AccountsUrls.Signin,
      body
    );
  }
}
