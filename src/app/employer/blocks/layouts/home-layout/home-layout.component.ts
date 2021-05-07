import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Declared some variable for JavaScript - Mudasir Ali
declare const themeSwitch: any;
declare const userMainImgDropdown: any;
declare const sidebarToggle: any;

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class EmployerHomeLayoutComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Running JavaScript Functions - Mudasir ALi
    sidebarToggle();
    themeSwitch();
    userMainImgDropdown();
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.toastr.success('You are Successfully Signed out', 'Signed Out');
    this.router.navigateByUrl('/signin');
  }

  onSidebarClicked() {
    sidebarToggle();
  }
}
