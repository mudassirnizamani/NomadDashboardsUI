import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/Signin';

import { environment } from 'src/environments/environment';
import { EmployerSignup } from '../models/EmployerSignupModel.interface';
import { EmployeeSignup } from '../models/EmployeeSignup.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}


  // Employer Signup Service - Mudasir Ali
  EmployerSignup(model: EmployerSignup) {
    var body = {
      email: model.email.toString(),
      userName: model.userName.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      website: model.website.toString(),
      position: model.position.toString(),
      componyName: model.componyName.toString(),
      zipCode: model.zipCode,
      state: model.state.toString(),
      password: model.password.toString(),
      phoneNumber: model.phoneNumber.toString(),
      country: model.country.toString(),
      city: model.city.toString(),
      componyAddress: model.componyAddress.toString(),
    };

    return this.http.post(
      environment.APIBaseUrl + environment.AccountsUrls.EmployerSignup,
      body
    );
  }

  // Employer Signup Service - Mudasir Ali
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
  getUserRole(userName: string)
  {
    return this.http.get(`${environment.APIBaseUrl}${environment.UserUrls.GetUserRoles}${userName}`)
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
