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
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  SigninForm: FormGroup;


  constructor(private toastr: ToastrService,
    private router: Router,
    private accountsService: AccountsService) { }

  ngOnInit(): void {
    activeField();
    
    if (localStorage.getItem("token") != null){
      this.router.navigateByUrl("/admin")
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
          localStorage.setItem('token', res.token);
          this.SigninForm.reset();
          this.router.navigateByUrl('/admin');
        },

        (err: any) => {
          if (err.status == 400 && err.error.error == 'PASSWORDISINCORRECT') {
            this.toastr.error('Your Password is incorrect', 'Signin Failed');
          } else if (
            err.status == 400 &&
            err.error.error == 'USERNAMEDOESNOTEXIST'
          ) {
            this.toastr.error("Your Username doesn't exist", 'Signin Failed');
          } else {
            this.toastr.error("Server didn't respond ", 'Signin Failed !');
          }
        }
      );
    }
  }

}
