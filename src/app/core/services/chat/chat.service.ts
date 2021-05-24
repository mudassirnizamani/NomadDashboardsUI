import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  hubConnection: signalR.HubConnection;

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.APIBaseUrl}${environment.ChatHubUrl}`) // mapping to the chathub as in startup.cs
    .configureLogging(signalR.LogLevel.Information)
    .build();

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.APIBaseUrl}${environment.ChatHubUrl}`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub Connection is Started');
      })
      .catch((err) => {
        console.log('Hub Conntection Failed: ' + err);
      });
  };

  asServer() {
    this.hubConnection.invoke("revieveMessage", "testting")
  }

  constructor() {}
}
