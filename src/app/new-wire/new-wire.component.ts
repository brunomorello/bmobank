import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { WireRequest } from '../model/wire-request';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  wireAmount(): void {
    console.log(`Wire Requested`);

    this.wireReq = {
      destinyAcc: this.person,
      sourceAcc: 'test',
      amount: this.amount,
      logDateTime: new Date()
    };

    this.transferRequestEvent.emit(this.wireReq);
    this.clearFields();
  }

  clearFields(): void {
    this.person = '';
    this.amount = 0;
  }

}
