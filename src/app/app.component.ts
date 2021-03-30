import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SignalRService } from './Services/signal-r.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public signalRService: SignalRService, private http: HttpClient) { }
  ngOnInit() {
    // this.signalRService.startConnection();
    // this.signalRService.addTransferChartDataListener();   
    // //this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44340/api/messagebroker')
      .subscribe(res => {
        console.log(res);
      })
  }
}
