import { Component, Input, OnInit } from '@angular/core';
import { WireRequest } from '../models/wire-request';
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
    this.service.wiresList().subscribe((wires: WireRequest[]) => {
      console.table(wires);
      this.wires = wires;
    })
  }

}
