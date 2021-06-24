import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private api: QuizService
    ){ 
      this.formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        email: [null, Validators.compose([
            Validators.required,
            Validators.email
        ])]
    });
  }

  ngOnInit(): void {
  }
  
  public cadastraUsuario(): void {
    console.log(`${this.api.baseUrl}/usuario`)
     this.http.post(`${this.api.baseUrl}/usuario`, JSON.stringify(this.formulario.value))
     .subscribe(dados => console.log(dados))
  }

}
