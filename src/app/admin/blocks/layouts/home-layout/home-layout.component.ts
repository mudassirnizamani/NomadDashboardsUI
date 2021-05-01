import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class AdminHomeLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
