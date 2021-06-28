import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Storage;

  constructor() { 
    this.auth = window.localStorage;
  }
  //testa se o navegador suporta o localstorage
  setStorage(key: string, value: any): boolean {
    if (this.auth) {
      this.auth.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  getStorage(key: string): any {
    if (this.auth) {
      return JSON.parse(this.auth.getItem(key) || '{}');
    }
    return null;
  }

  removeStorage(key: string): boolean {
    if (this.auth) {
      this.auth.removeItem(key);
      return true;
    }
    return false;
  }

  clearStorage(): boolean {
    if (this.auth) {
      this.auth.clear();
      return true;
    }
    return false;
  }
}
