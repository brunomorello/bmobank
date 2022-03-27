import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WireRequest } from '../models/wire-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WireServiceService {

  private _wiresList: WireRequest[];
  private _url = 'http://localhost:3000/wires';

  constructor(private httpClient: HttpClient) { 
    this._wiresList = [];
  }

  wiresList(): Observable<WireRequest[]> {
    return this.httpClient.get<WireRequest[]>(this._url);
  }

  newWire(wireReq: WireRequest): Observable<WireRequest> {
    return this.httpClient.post<WireRequest>(this._url, wireReq);
  }
}
