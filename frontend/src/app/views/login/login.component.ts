import { UsuarioModel } from './usuario.model';
import { Component } from '@angular/core';
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
export class LoginComponent {
  public usuario: UsuarioModel = new UsuarioModel();
  public formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private api: QuizService,
    private router: Router,
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
  
  public login(): void {
    console.log(JSON.stringify(this.formulario.value))
    
    if(this.formulario.valid) {
      
      this.api.cadastraUsuario(this.usuario).subscribe(user =>{
        this.usuario = new UsuarioModel();
        
        this.auth.setStorage('id', user.id);
        this.auth.setStorage('nome', user.nome);
        this.auth.setStorage('email', user.email);

        var usuario = {
          nome: user.nome,
          email: user.email
        }
        this.http.sendEmail("http://localhost:3000/sendmail", usuario).subscribe(
          data => {
            let res:any = data; 
            console.log(
              `👏 > 👏 > 👏 > 👏 ${user.name} foi registrado com sucesso e o e-mail foi enviado e o id da mensagem é ${res.messageId}`
            );
          },
          err => {
            return Promise.reject('Não deu boa!').catch(err => {
              throw new Error(err);
            });
          }
        );
      
        this.router.navigateByUrl('regras');
      }, err => {
        console.error('Não foi possível cadastrar o usuário', err)
      });
    
    } 
  }
}
