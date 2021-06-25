import { UsuarioModel } from './views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/`, usuario);
  }

}
