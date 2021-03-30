import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../Services/signal-r.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public data : any;
  constructor(public signalRService: SignalRService,) { }
  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.hubConnection.on('onMessageReceived', (data) => {
        console.log(data);
        this.data = data;
    });
  }

}
