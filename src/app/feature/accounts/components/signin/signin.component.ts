import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signin } from '../../models/Signin';
import { AccountsService } from '../../services/accounts.service';

// Declared some variable for JavaScript - Mudasir Ali
declare const activeField: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  SigninForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    activeField();

    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Admin'
    ) {
      this.toastr.info(
        `You are already Signed In as Admin`,
        'Already Signed In'
      );
      this.router.navigateByUrl('/admin');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employer'
    ) {
      this.toastr.info(
        `You are already Signed In as Client`,
        'Already Signed In'
      );
      this.router.navigateByUrl('/employer');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employee'
    ) {
      this.toastr.info(
        `You are already Signed In as Customer`,
        'Already Signed In'
      );
      this.router.navigateByUrl('/employee');
    }

    // SignForm FORMGROUP - Mudasir Ali
    this.SigninForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Getter Methods for All SingupForm FormControls - Mudasir ALi
  get UserName() {
    return this.SigninForm.get('userName') as FormControl;
  }

  get Password() {
    return this.SigninForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.SigninForm.invalid) {
      this.toastr.warning('Plz, fill the Fields Correctly !');
    } else {
      var model: Signin = {
        UserName: this.SigninForm.value.userName,
        Password: this.SigninForm.value.password,
      };

      this.accountsService.Signin(model).subscribe(
        (res: any) => {
          this.accountsService.getUserRole(model.UserName).subscribe(
            (res: any) => {
              res.forEach((role) => {
                if (role == 'Employer') {
                  localStorage.setItem('token', res.token);
                  localStorage.setItem('userType', 'Employer');
                  this.SigninForm.reset();
                  this.toastr.success(
                    `Successfully signin as ${model.UserName}`,
                    `Welcome to Client Dashboard`
                  );
                  this.router.navigateByUrl('/employer');
                } else if (role == 'Employee') {
                  localStorage.setItem('token', res.token);
                  localStorage.setItem('userType', 'Employee');
                  this.SigninForm.reset();
                  this.toastr.success(
                    `Successfully signin as ${model.UserName}`,
                    `Welcome to Customer Dashboard`
                  );
                  this.router.navigateByUrl('/employee');
                } else if (role == 'Admin') {
                  localStorage.setItem('token', res.token);
                  localStorage.setItem('userType', 'Admin');
                  this.SigninForm.reset();
                  this.toastr.success(
                    `Successfully signin as ${model.UserName}`,
                    `Welcome to Admin Dashboard`
                  );
                  this.router.navigateByUrl('/admin');
                } else {
                  this.toastr.error(
                    `Sorry ${model.UserName}, We didn't found your UserName`,
                    'Role Not Found'
                  );
                }
              });
            },
            (err: any) => {}
          );
        },

        (err: any) => {
          if (err.status == 400 && err.error.error == 'PASSWORDISINCORRECT') {
            this.toastr.error(
              `Password is incorrect for '${model.UserName}'`,
              'Signin Failed'
            );
          } else if (
            err.status == 400 &&
            err.error.error == 'USERNAMEDOESNOTEXIST'
          ) {
            this.toastr.error(
              `Username '${model.UserName}' doesn't exist`,
              'Signin Failed'
            );
          } else {
            this.toastr.error("Server didn't respond ", 'Signin Failed !');
          }
        }
      );
    }
  }
}
