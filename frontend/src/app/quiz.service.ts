import { UsuarioModel } from './views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaModule } from './models/resposta.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public baseUrl;

  constructor(
    private http: HttpClient) {
    this.baseUrl = environment;
   }

  listaPergunta() : Observable<any> {
    return this.http.get(`${this.baseUrl.api}/perguntas`);
  }
  
  listaOpcoes() : Observable<any> {
    return this.http.get(`${this.baseUrl.api}/opcoes`);
  }

  listaUsuarios() : Observable<any> {
    return this.http.get(`${this.baseUrl.api}/usuarios`);
  }

  listaRanking() : Observable<any> {
    return this.http.get(`${this.baseUrl.api}/ranking`);
  }

  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.baseUrl.api}/usuario/`, usuario);
  }

  cadastraResposta(resposta: RespostaModule): Observable<any> {
    return this.http.post(`${this.baseUrl.api}/resposta`, resposta);
  }
}
