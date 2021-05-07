import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerSignup } from '../../models/EmployerSignupModel.interface';
import { AccountsService } from '../../services/accounts.service';

// Declared some variable for JavaScript - Mudasir Ali
declare const activeField: any;

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.scss'],
})
export class EmployerSignupComponent implements OnInit {
  // Variables
  SignupForm: FormGroup;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
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
        website: new FormControl('', [Validators.pattern(this.reg)]),
        position: new FormControl('', []),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        componyName: new FormControl('', [Validators.required]),
        country: new FormControl('', []),
        componyAddress: new FormControl('', [Validators.required]),
        componyZipCode: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
        componyCity: new FormControl('', []),
        componyState: new FormControl('', []),
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

  get Website() {
    return this.SignupForm.get('website') as FormControl;
  }

  get Position() {
    return this.SignupForm.get('position') as FormControl;
  }

  get Password() {
    return this.SignupForm.get('password') as FormControl;
  }

  get ConfirmPassword() {
    return this.SignupForm.get('confirmPassword') as FormControl;
  }

  get ComponyName() {
    return this.SignupForm.get('componyName') as FormControl;
  }

  get Country() {
    return this.SignupForm.get('componyPhone') as FormControl;
  }

  get ComponyAddress() {
    return this.SignupForm.get('componyAddress') as FormControl;
  }

  get ComponyZipCode() {
    return this.SignupForm.get('componyZipCode') as FormControl;
  }

  get ComponyCity() {
    return this.SignupForm.get('componyCity') as FormControl;
  }

  get ComponyState() {
    return this.SignupForm.get('componyState') as FormControl;
  }

  onSubmit() {
    if (this.SignupForm.invalid) {
      this.toastr.warning('Plz, fill the Fields Correctly !');
    } else {
      var model: EmployerSignup = {
        email: this.SignupForm.value.email,
        userName: this.SignupForm.value.userName,
        firstName: this.SignupForm.value.firstName,
        lastName: this.SignupForm.value.lastName,
        website: this.SignupForm.value.website,
        position: this.SignupForm.value.position,
        componyName: this.SignupForm.value.componyName,
        zipCode: this.SignupForm.value.componyZipCode,
        state: this.SignupForm.value.componyState,
        password: this.SignupForm.value.confirmPassword,
        phoneNumber: this.SignupForm.value.phoneNumber,
        country: this.SignupForm.value.country,
        city: this.SignupForm.value.componyCity,
        componyAddress: this.SignupForm.value.componyAddress,
      };

      this.accountsService.EmployerSignup(model).subscribe(
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
                    'Username is already taken',
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
