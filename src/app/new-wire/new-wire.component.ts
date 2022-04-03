import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WireRequest } from '../models/wire-request';
import { WireServiceService } from '../services/wire-service.service';

@Component({
  selector: 'app-new-wire',
  templateUrl: './new-wire.component.html',
  styleUrls: ['./new-wire.component.scss']
})
export class NewWireComponent implements OnInit {

  @Output() transferRequestEvent: EventEmitter<any> = new EventEmitter();

  public amount!: number;
  public person!: string;
  private wireReq!: WireRequest;

  constructor(private service: WireServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  wireAmount(): void {
    console.log(`Wire Requested`);

    this.wireReq = {
      id: 0,
      destinyAcc: this.person,
      sourceAcc: 'test',
      amount: this.amount,
      logDateTime: new Date()
    };

    this.service.newWire({...this.wireReq})
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('acc-activity');
      });
    this.transferRequestEvent.emit(this.wireReq);
    this.clearFields();
  }

  clearFields(): void {
    this.person = '';
    this.amount = 0;
  }

}
