import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});

  public usuario: Usuario = new Usuario();

  constructor(
    private auth: AuthService,
    ){ }

  ngOnInit(): void {
    this.login();
  }
  
  public login(): void {
    console.log(this.usuario);
    this.auth.logar(this.usuario);
  }
}
