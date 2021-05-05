import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() userData: User;

  constructor() { }

  ngOnInit(): void {
    

  }

}
