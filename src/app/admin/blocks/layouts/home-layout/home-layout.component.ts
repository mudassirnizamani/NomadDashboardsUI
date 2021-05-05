import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Declared some variable for JavaScript - Mudasir Ali
declare const themeSwitch: any;
declare const userMainImgDropdown: any;



@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class AdminHomeLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Running JavaScript Functions - Mudasir ALi
    themeSwitch();
    userMainImgDropdown();


  }

  Logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin');
  }

}
