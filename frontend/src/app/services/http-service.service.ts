import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpGet(url: any) {
    return this.http.get(url);
  }

  httpPost(url: any, {}) {
    return this.http.post(url, { name: "Quiz" });
  }

  sendEmail(url: any, data: any) {
    return this.http.post(url, data);
  }

}
