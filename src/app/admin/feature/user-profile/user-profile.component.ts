import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user/user.service';
import { AdminUpdateUser } from 'src/app/core/models/Admin/UpdateUserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  username;
  userData: User;
  EditForm: FormGroup;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    // Edit Form for EditDetails - Mudasir Ali
    this.EditForm = new FormGroup({
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
      email: new FormControl({ disabled: true }, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
      website: new FormControl('', [Validators.pattern(this.reg)]),
      position: new FormControl('', []),
      componyName: new FormControl('', [Validators.required]),
      country: new FormControl('', []),
      componyAddress: new FormControl('', [Validators.required]),
      componyZipCode: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
      componyCity: new FormControl('', []),
      componyState: new FormControl('', []),
    });

    this.userService.getUserByUserName(this.username).subscribe(
      (res: any) => {
        if (res.status != 400) {
          this.userData = res;
          this.EditForm.setValue({
            userName: res.userName,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            phoneNumber: res.phoneNumber,
            website: res.website,
            position: res.position,
            componyName: res.componyName,
            country: res.country,
            componyAddress: res.componyAddress,
            componyZipCode: res.zipCode,
            componyCity: res.city,
            componyState: res.state,
          });
        } else {
          this.toastr.error(
            `Username '${this.username}' doesn't exist`,
            'Not Found'
          );
        }
      },
      (err) => {
        this.toastr.error(
          `Username '${this.username}' doesn't exist`,
          'Not Found'
        );
      }
    );
  }

  // Getter Methods for FormControls - Mudasir Ali
  get UserName() {
    return this.EditForm.get('userName') as FormControl;
  }

  get FirstName() {
    return this.EditForm.get('firstName') as FormControl;
  }

  get LastName() {
    return this.EditForm.get('lastName') as FormControl;
  }

  get Email() {
    return this.EditForm.get('email') as FormControl;
  }

  get PhoneNumber() {
    return this.EditForm.get('phoneNumber') as FormControl;
  }

  get Website() {
    return this.EditForm.get('website') as FormControl;
  }

  get Position() {
    return this.EditForm.get('position') as FormControl;
  }

  get ComponyName() {
    return this.EditForm.get('componyName') as FormControl;
  }

  get Country() {
    return this.EditForm.get('componyPhone') as FormControl;
  }

  get ComponyAddress() {
    return this.EditForm.get('componyAddress') as FormControl;
  }

  get ComponyZipCode() {
    return this.EditForm.get('componyZipCode') as FormControl;
  }

  get ComponyCity() {
    return this.EditForm.get('componyCity') as FormControl;
  }

  get ComponyState() {
    return this.EditForm.get('componyState') as FormControl;
  }

  onSubmit() {
    var model: AdminUpdateUser = {
      id: this.userData.id,
      firstName: this.EditForm.get('firstName').value,
      lastName: this.EditForm.get('lastName').value,
      website: this.EditForm.get('website').value,
      country: this.EditForm.get('country').value,
      city: this.EditForm.get('componyCity').value,
      phoneNumber: this.EditForm.get('phoneNumber').value,
      position: this.EditForm.get('position').value,
      state: this.EditForm.get('componyState').value,
      zipCode: this.EditForm.get('componyZipCode').value,
      componyName: this.EditForm.get('componyName').value,
      componyAddress: this.EditForm.get('componyAddress').value,
    };

    this.userService.adminUpdateUser(model).subscribe(
      (res: any) => {
        if (res.succeeded == true) {
          this.userService
            .getUserByUserName(this.username)
            .subscribe((res: any) => {
              if (res.status != 400) {
                this.userData = res;
              }
            });
          this.toastr.success(
            `${this.EditForm.get('userName').value}, is Updated.`,
            'Updated Successfully'
          );
        } else if (res.succeeded == false) {
          this.toastr.error(
            `${this.EditForm.get('userName').value}, is Not Updated.`,
            'Updated Failed'
          );
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error(
          `${this.EditForm.get('userName').value}, is Not Updated.`,
          'Updated Failed'
        );
      }
    );
  }

  onReset() {
    this.EditForm.setValue({
      userName: this.userData.userName,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      email: this.userData.email,
      phoneNumber: this.userData.phoneNumber,
      website: this.userData.website,
      position: this.userData.position,
      componyName: this.userData.componyName,
      country: this.userData.country,
      componyAddress: this.userData.componyAddress,
      componyZipCode: this.userData.zipCode,
      componyCity: this.userData.city,
      componyState: this.userData.state,
    });
    this.toastr.success('Form is Reset, Successfully', '', {
      timeOut: 2500,
    });
  }
}
