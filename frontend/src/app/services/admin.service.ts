import { OpcaoModule } from '../models/opcao.module';
import { PerguntaModule } from '../models/pergunta.module';
import { UsuarioModel } from './../views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  public baseUrl: string;

  constructor(private http: HttpClient, private api: ApiService) {
    // this.baseUrl = `http://localhost:8080/api`;
    this.baseUrl = api.api;
   }
   /**
   * @GetMapping("/perguntas")
	 * @ApiOperation(value="Lista as perguntas")
   */
  listaPergunta() : Observable<any> {
    return this.http.get(`${this.api.api}/perguntas`);
  }
   /**
   * @PostMapping("/pergunta")
	 * @ApiOperation(value="Cadastra uma pergunta")
   */
  cadastraPergunta(pergunta: PerguntaModule) : Observable<any> {
    return this.http.post(`${this.api.api}/pergunta/`, pergunta);
  }
   /**
   * @PostMapping("/opcao")
	 * @ApiOperation(value="Cadastra opcoes")
   */
  cadastraOpcao(opcao: OpcaoModule): Observable<any> {
    return this.http.post(`${this.api.api}/opcao/`, opcao);
  }
  /**
   * @PostMapping("/usuario")
	 * @ApiOperation(value="Cadastra um usuario")
   */
  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.api.api}/usuario/`, usuario);
  }

}
