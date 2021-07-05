import { UsuarioModel } from './views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaModule } from './models/resposta.module';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public baseUrl: String;

  constructor(
    private http: HttpClient,
    private api: ApiService
    ) {
    this.baseUrl = this.api.api;
    // this.baseUrl = `http://localhost:8080/api`;
   }

  listaPergunta() : Observable<any> {
    return this.http.get(`${this.api.api}/perguntas`);
  }
  
  listaOpcoes() : Observable<any> {
    return this.http.get(`${this.api.api}/opcoes`);
  }

  listaUsuarios() : Observable<any> {
    return this.http.get(`${this.api.api}/usuarios`);
  }

  listaRanking() : Observable<any> {
    return this.http.get(`http://192.168.0.217:8080/api/ranking`);
  }

  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.api.api}/usuario/`, usuario);
  }

  cadastraResposta(resposta: RespostaModule): Observable<any> {
    return this.http.post(`${this.api.api}/resposta`, resposta);
  }

}
