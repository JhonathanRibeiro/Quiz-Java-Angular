import { UsuarioModel } from './usuario.model';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: UsuarioModel = new UsuarioModel();
  public formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private api: QuizService,
    private router: Router,
    private auth: AuthService
    ){ 
      this.formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.compose([
            Validators.required,
            Validators.email
        ])]
    });
  }
  
  public login(): void {
    console.log(JSON.stringify(this.formulario.value))
    
    if(this.formulario.valid) {
      
      this.api.cadastraUsuario(this.usuario).subscribe(user =>{
        this.usuario = new UsuarioModel();
        
        this.auth.setStorage('id', user.id);
        this.auth.setStorage('nome', user.nome);
        this.auth.setStorage('email', user.email);

        this.router.navigateByUrl('regras');
      }, err => {
        console.error('Não foi possível cadastrar o usuário', err)
      });
    } 
  }
}
