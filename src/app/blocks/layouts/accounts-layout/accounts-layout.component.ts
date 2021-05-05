import { Component, OnInit } from '@angular/core';

// Declared some variables for JavaScript - Mudasir Ali
declare const themeSwitch: any;

@Component({
  selector: 'app-accounts-layout',
  templateUrl: './accounts-layout.component.html',
  styleUrls: ['./accounts-layout.component.scss'],
})
export class AccountsLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    themeSwitch();
  }
}
