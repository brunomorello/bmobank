import { Injectable } from '@angular/core';
import { WireRequest } from '../model/wire-request';

@Injectable({
  providedIn: 'root'
})
export class WireServiceService {

  private _wiresList: WireRequest[];

  constructor() { 
    this._wiresList = [];
  }

  get wiresList(): WireRequest[] {
    return this._wiresList;
  }

  newWire(wireReq: WireRequest) {
    this._wiresList.push(wireReq);
  }
}
