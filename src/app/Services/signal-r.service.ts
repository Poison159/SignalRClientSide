import { Injectable } from '@angular/core';

import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data : any;
  constructor() { }

  public hubConnection: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://192.168.8.101:45455/messagebroker')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  // public addTransferChartDataListener() : any {
  //   this.hubConnection.on('onMessageReceived', (data) => {
  //     console.log(data);
  //   });
  // }
}

