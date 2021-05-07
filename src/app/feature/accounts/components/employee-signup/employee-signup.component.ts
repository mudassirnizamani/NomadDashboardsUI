import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeSignup } from '../../models/EmployeeSignup.interface';
import { AccountsService } from '../../services/accounts.service';

// Declared some variable for JavaScript - Mudasir Ali
declare const activeField: any;

@Component({
  selector: 'app-employee-signup',
  templateUrl: './employee-signup.component.html',
  styleUrls: ['./employee-signup.component.scss'],
})
export class EmployeeSignupComponent implements OnInit {
  // Variables
  SignupForm: FormGroup;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private accountsService: AccountsService
  ) {}

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

    activeField();

    // Signup Form for Signup Page - Mudasir Ali
    this.SignupForm = new FormGroup(
      {
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70),
        ]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.passwordMatchingValidator
    );
  }

  // Validation function for Matching Password and Confirm Password - Mudasir Ali
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value == fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }

  // Getter Methods for FormControls - Mudasir Ali
  get UserName() {
    return this.SignupForm.get('userName') as FormControl;
  }

  get FirstName() {
    return this.SignupForm.get('firstName') as FormControl;
  }

  get LastName() {
    return this.SignupForm.get('lastName') as FormControl;
  }

  get Email() {
    return this.SignupForm.get('email') as FormControl;
  }

  get PhoneNumber() {
    return this.SignupForm.get('phoneNumber') as FormControl;
  }

  get Password() {
    return this.SignupForm.get('password') as FormControl;
  }

  get ConfirmPassword() {
    return this.SignupForm.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    if (this.SignupForm.invalid) {
      this.toastr.warning('Plz, fill the Fields Correctly !');
    } else {
      var model: EmployeeSignup = {
        email: this.SignupForm.value.email,
        userName: this.SignupForm.value.userName,
        firstName: this.SignupForm.value.firstName,
        lastName: this.SignupForm.value.lastName,
        password: this.SignupForm.value.confirmPassword,
        phoneNumber: this.SignupForm.value.phoneNumber,
      };

      this.accountsService.EmployeeSignup(model).subscribe(
        (res: any) => {
          if (res.succeeded) {
            this.SignupForm.reset();
            this.toastr.success(
              `Account for '${model.userName}, is Successfully created '`,
              'Account is created'
            );
            this.router.navigateByUrl('/signin');
          } else {
            res.errors.forEach((element) => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error(
                    `Username '${model.userName}' is already taken`,
                    'Signup Failed'
                  );
                  break;

                default:
                  this.toastr.error(element.description, 'Signup Failed');
                  break;
              }
            });
          }
        },
        (err: any) => {
          this.toastr.error("Server didn't respond ", 'Signup Failed !');
        }
      );
    }
  }
}
