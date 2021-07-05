import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public api = '';

  constructor() { }

  public interno() {
    this.api = 'http://192.168.0.217:8080/api';
  }

  public externo() {
    this.api = 'http://177.101.142.200:60001/api';
  }
}
