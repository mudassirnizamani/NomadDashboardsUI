import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminUpdateUser } from 'src/app/core/models/Admin/UpdateUserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile() {
    var tokenHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(
      environment.APIBaseUrl + environment.UserUrls.UserProfile,
      { headers: tokenHeader }
    );
  }

  getAllUsers() {
    return this.http.get(
      environment.APIBaseUrl + environment.UserUrls.GetAllUsers
    );
  }

  getUserByUserName(username: string) {
    return this.http.get(
      `${environment.APIBaseUrl}${environment.UserUrls.GetUserByUserName}${username}`
    );
  }

  adminUpdateUser(model: AdminUpdateUser) {
    var body = {
      id: model.id,
      firstName: model.firstName,
      lastName: model.lastName,
      website: model.website,
      country: model.country,
      city: model.city,
      phoneNumber: model.phoneNumber,
      position: model.position,
      state: model.state,
      zipCode: model.zipCode,
      componyName: model.componyName,
      componyAddress: model.componyAddress,
    };
    return this.http.post(environment.APIBaseUrl + environment.UserUrls.AdminUpdateUsers, body)
  }
}
