import { Usuario } from './../views/admin/account/login-admin/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Storage;
  private usuarioAuth: boolean = false;

  constructor(private router: Router) { 
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

  logar(usuario: Usuario) {
    if(usuario.nome === 'admin@ids.inf.br' && usuario.senha === 'admin0207') {
        this.usuarioAuth = true;
        this.router.navigate(['/admin/ranking']);
      } else {
        this.usuarioAuth = false;
        this.router.navigate(['/admin/login']);
    }
  }
}
