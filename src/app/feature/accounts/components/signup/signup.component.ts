import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Admin'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/admin');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employer'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/employer');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employee'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/admin');
    }
  }
}
