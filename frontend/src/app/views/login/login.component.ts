import { UsuarioModel } from './usuario.model';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http-service.service';
import { Router } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  @ViewChild(MatRadioButton) groupC: any = {};

  public usuario: UsuarioModel = new UsuarioModel();
  public formulario: FormGroup = new FormGroup({});
  public onde = 'casa';
  constructor(
    private formBuilder: FormBuilder,
    private api: QuizService,
    private auth: AuthService,
    private http: HttpService,
    private router: Router,
    public apiCOnfig: ApiService
    ){ 
      this.formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        tipo: ['caas'],
        email: ['', Validators.compose([
            Validators.required,
            Validators.email
        ])]
    });
  }

  public login(): void {

    if (this.onde == 'casa') {
      this.apiCOnfig.externo();
    } else {
      this.apiCOnfig.interno();
    }

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
      
        this.router.navigate(['/regras']);

        }, err => {
          document.querySelector('#email-invalido')!.innerHTML = `
          <span class="text-danger">Este endereço de e-mail já está associado a uma conta existente.</span>
          `;
          console.error('Não foi possível cadastrar o usuário! Este endereço de e-mail já está associado a uma conta existente', err);
        });
    } 
  }
}
