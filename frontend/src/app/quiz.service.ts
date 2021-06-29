import { UsuarioModel } from './views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaModule } from './models/resposta.module';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public baseUrl: String;

  constructor(
    private http: HttpClient
    ) {
    this.baseUrl = `http://localhost:8080/api`;
   }

  listaPergunta() : Observable<any> {
    return this.http.get(`${this.baseUrl}/perguntas`);
  }
  
  listaOpcoes() : Observable<any> {
    return this.http.get(`${this.baseUrl}/opcoes`);
  }

  listaUsuarios() : Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }

  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/`, usuario);
  }

  cadastraResposta(resposta: RespostaModule): Observable<any> {
    return this.http.post(`${this.baseUrl}/resposta`, resposta);
  }

}
