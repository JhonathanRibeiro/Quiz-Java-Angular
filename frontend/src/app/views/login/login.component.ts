import { UsuarioModel } from './usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: UsuarioModel = new UsuarioModel();
  public formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private api: QuizService,
    private auth: AuthService,
    private http: HttpService
    ){ 
      this.formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.compose([
            Validators.required,
            Validators.email
        ])]
    });
  }

  ngOnInit(): void {
  }

  
  public login(): void {
    console.log(JSON.stringify(this.formulario.value))
    
    if(this.formulario.valid) {

      this.api.cadastraUsuario(this.usuario).subscribe(user =>{
        this.usuario = new UsuarioModel();
        
        this.auth.setStorage('id', user.id);
        this.auth.setStorage('nome', user.nome);
        this.auth.setStorage('email', user.email);

        var userdata = {
          nome: user.nome,
          email: user.email
        }
        this.http.sendEmail("http://localhost:3000/sendmail", userdata).subscribe(
          data => {
            let res:any = data; 
            console.log(
              `👏 > 👏 > 👏 > 👏 ${user.nome} foi registrado com sucesso e o e-mail foi enviado e o id da mensagem é ${res.messageId}`
            );
          },
          err => {
            return Promise.reject('Não deu boa!').catch(err => {
              throw new Error(err);
            });
          }
        );
      
        window.location.replace("/regras");

        }, err => {
          document.querySelector('#email-invalido')!.innerHTML = `
          <span class="text-danger">Este endereço de e-mail já está associado a uma conta existente.</span>
          `;
          console.error('Não foi possível cadastrar o usuário! Este endereço de e-mail já está associado a uma conta existente', err)
        });
    } 
  }
}
