import { UsuarioModel } from './usuario.model';
import { CommonModule } from '@angular/common';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public iduser = 0;

  public usuario: UsuarioModel = new UsuarioModel();
  public formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private api: QuizService,
    private router: Router
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
    console.log(this.usuario);
  }
  
  public login(): void {
    console.log(JSON.stringify(this.formulario.value))
    
    if(this.formulario.valid) {
      
      this.api.cadastraUsuario(this.usuario).subscribe(user =>{
        this.usuario = new UsuarioModel();
        this.iduser = user.id
        this.router.navigateByUrl('regras');

        console.log('id usuario',this.iduser)
      }, err => {
        console.log('Não foi possível cadastrar o usuário', err)
      });
    } 
  }
}
