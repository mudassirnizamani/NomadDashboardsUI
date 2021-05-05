import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userDetails;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => {
        this.userDetails = data;
      }
    );
  }
}
