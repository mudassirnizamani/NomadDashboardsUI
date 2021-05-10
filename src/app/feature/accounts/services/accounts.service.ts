import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/Signin';

import { environment } from 'src/environments/environment';
import { ClientSignupModel } from '../models/ClientSignupModel.interface';
import { EmployeeSignup } from '../models/EmployeeSignup.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  // Client Signup Function - Mudasir Ali
  ClientSignup(model: ClientSignupModel) {
    var body = {
      userName: model.userName.toString(),
      email: model.email.toString(),
      password: model.password.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      componyName: model.componyName.toString(),
      city: model.city.toString(),
      province: model.province.toString(),
      zipCode: model.zipCode,
      phoneNumber: model.phoneNumber.toString(),
      website: model.website.toString(),
      country: model.country.toString(),
      profilePic: '/assets/images/users-default-profile-pic.jpg',
      answer_1: model.answer_1.toString(),
      answer_2: model.answer_2.toString(),
      answer_3: model.answer_3.toString(),
      answer_4: model.answer_4.toString(),
      answer_5: model.answer_5.toString(),
      answer_6: model.answer_6.toString(),
      answer_7: model.answer_7.toString(),
      answer_8: model.answer_8.toString(),
      answer_9: model.answer_9.toString(),
    };
    console.log(body)
    return this.http.post(
      environment.APIBaseUrl + environment.AccountsUrls.ClientSignup,
      body
    );
  }

  // Employee Signup Function - Mudasir Ali
  EmployeeSignup(model: EmployeeSignup) {
    var body = {
      email: model.email.toString(),
      userName: model.userName.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      password: model.password.toString(),
      phoneNumber: model.phoneNumber.toString(),
    };

    return this.http.post(
      environment.APIBaseUrl + environment.AccountsUrls.EmployeeSignup,
      body
    );
  }

  // Service to get User Roles by Username
  getUserRole(userName: string) {
    return this.http.get(
      `${environment.APIBaseUrl}${environment.UserUrls.GetUserRoles}${userName}`
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
