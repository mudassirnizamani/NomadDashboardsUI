import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from 'src/app/core/services/chat/chat.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class ClientChatMessageComponent implements OnInit {
  username;
  userData: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    this.userService.getUserByUserName(this.username).subscribe(
      (res: any) => {
        if (res.status != 400) {
          this.userData = res;
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

    this.chatService.startConnection();

    setTimeout(() => {
         
    }, 2000)
  }
}
