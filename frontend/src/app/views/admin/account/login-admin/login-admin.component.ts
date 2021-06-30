import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent{
  public formulario: FormGroup = new FormGroup({});
  public usuario: Usuario = new Usuario();

  constructor(
    private auth: AuthService,
    ){ }

  public login(): void {
    if(this.usuario.email === 'admin@ids.inf.br' && this.usuario.senha === 'admin0207') {
      window.location.replace('/admin/ranking');
      this.auth.setStorage('usuario', this.usuario.email);
    } else {
      document.querySelector('#erro-message')!.innerHTML = `
      <span class="text-danger">Usuário ou senha inválidos.</span>
      `;
    }
    console.log(this.usuario.email);
  }
}
