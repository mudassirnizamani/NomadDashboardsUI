import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ClientChatComponent implements OnInit {
  allUsersData: any;

  constructor(private userService: UserService) { }

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
