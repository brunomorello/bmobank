import { Component, Input, OnInit } from '@angular/core';
import { WireRequest } from '../model/wire-request';
import { WireServiceService } from '../services/wire-service.service';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.scss']
})
export class AccountActivityComponent implements OnInit {

  wires!: WireRequest[];

  constructor(private service: WireServiceService) { }

  ngOnInit(): void {
    this.wires = this.service.wiresList;
  }

}
