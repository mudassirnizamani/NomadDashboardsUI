import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientChatComponent } from './chat.component';
import { ClientChatMessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ClientChatComponent,
    ClientChatMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
