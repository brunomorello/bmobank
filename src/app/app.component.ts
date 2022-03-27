import { Component } from '@angular/core';
import { WireRequest } from './model/wire-request';
import { WireServiceService } from './services/wire-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmobank'; 

  constructor(private service: WireServiceService) {}

  wire($event: any) {
    this.service.newWire({...$event});
  }
}
