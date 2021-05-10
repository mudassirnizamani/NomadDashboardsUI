import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientSignupModel } from '../../models/ClientSignupModel.interface';
import { AccountsService } from '../../services/accounts.service';

// Declared some variable for JavaScript - Mudasir Ali
declare const activeField: any;

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss'],
})
export class ClientSignupComponent implements OnInit {
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
      localStorage.getItem('userType') == 'Client'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/client');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employee'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/employee');
    }

    activeField();

    // Signup Form for Client Signup Page - Mudasir Ali
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
        phoneNumber: new FormControl('', [
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
        website: new FormControl('', [
          Validators.pattern(this.reg),
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        componyName: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
        city: new FormControl('', [Validators.required]),
        province: new FormControl('', [Validators.required]),
        answer_1: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_2: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_3: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_4: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_5: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_6: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_7: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_8: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
        answer_9: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
        ]),
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
    return this.SignupForm.get('country') as FormControl;
  }

  get ZipCode() {
    return this.SignupForm.get('zipCode') as FormControl;
  }

  get City() {
    return this.SignupForm.get('city') as FormControl;
  }

  get Province() {
    return this.SignupForm.get('province') as FormControl;
  }

  get Answer_1() {
    return this.SignupForm.get('answer_1') as FormControl;
  }

  get Answer_2() {
    return this.SignupForm.get('answer_2') as FormControl;
  }

  get Answer_3() {
    return this.SignupForm.get('answer_3') as FormControl;
  }

  get Answer_4() {
    return this.SignupForm.get('answer_4') as FormControl;
  }

  get Answer_5() {
    return this.SignupForm.get('answer_5') as FormControl;
  }

  get Answer_6() {
    return this.SignupForm.get('answer_6') as FormControl;
  }

  get Answer_7() {
    return this.SignupForm.get('answer_7') as FormControl;
  }

  get Answer_8() {
    return this.SignupForm.get('answer_8') as FormControl;
  }

  get Answer_9() {
    return this.SignupForm.get('answer_9') as FormControl;
  }

  onSubmit() {
    if (this.SignupForm.invalid) {
      this.toastr.warning('Plz, fill the Fields Correctly !');
    } else {
      var model: ClientSignupModel = {
        userName: this.SignupForm.value.userName,
        password: this.SignupForm.value.confirmPassword,
        email: this.SignupForm.value.email,
        firstName: this.SignupForm.value.firstName,
        lastName: this.SignupForm.value.lastName,
        componyName: this.SignupForm.value.componyName,
        city: this.SignupForm.value.city,
        province: this.SignupForm.value.province,
        zipCode: this.SignupForm.value.zipCode,
        phoneNumber: this.SignupForm.value.phoneNumber,
        website: this.SignupForm.value.website,
        country: this.SignupForm.value.country,
        profilePic: '',
        answer_1: this.SignupForm.value.answer_1,
        answer_2: this.SignupForm.value.answer_2,
        answer_3: this.SignupForm.value.answer_3,
        answer_4: this.SignupForm.value.answer_4,
        answer_5: this.SignupForm.value.answer_5,
        answer_6: this.SignupForm.value.answer_6,
        answer_7: this.SignupForm.value.answer_7,
        answer_8: this.SignupForm.value.answer_8,
        answer_9: this.SignupForm.value.answer_9,
      };

      console.log(model);

      this.accountsService.ClientSignup(model).subscribe(
        (res: any) => {
          if (res.succeeded) {
            this.SignupForm.reset();
            this.toastr.success(
              `Account for '${model.userName}' is Successfully created '`,
              'Account is Created'
            );
            this.router.navigateByUrl('/signin');
          } else if (!res.succeeded && res.error == 'DuplicateEmail') {
            this.toastr.error(
              `Email '${model.email}' is already taken`,
              'Signup Failed'
            );
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
