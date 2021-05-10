import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user/user.service';

// Declared some variable for JavaScript - Mudasir Ali
declare const themeSwitch: any;
declare const userMainImgDropdown: any;
declare const sidebarToggle: any;

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class ClientHomeLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  userData;

  ngOnInit(): void {
    // Running JavaScript Functions - Mudasir ALi
    sidebarToggle();
    themeSwitch();
    userMainImgDropdown();

    this.userService.getUserProfile().subscribe(
      (res: any) => {
        this.userData = res;
      },
      (err) => {
        this.toastr.error("Server didn't Respond", "Can't Get Profile");
      }
    );
  }

  Signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.toastr.success('You are Successfully Signed out', 'Signed Out');
    this.router.navigateByUrl('/signin');
  }

  onSidebarClicked() {
    sidebarToggle();
  }
}
