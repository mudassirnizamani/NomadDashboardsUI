import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  allUsersData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.allUsersData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
