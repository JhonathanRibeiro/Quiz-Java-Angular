import { OpcaoModule } from './../models/opcao/opcao.module';
import { PerguntaModule } from './../models/pergunta/pergunta.module';
import { UsuarioModel } from './../views/login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  public baseUrl: string;

  constructor( private http: HttpClient) {
    this.baseUrl = `http://localhost:8080/api`;
   }
   /**
   * @GetMapping("/perguntas")
	 * @ApiOperation(value="Lista as perguntas")
   */
  listaPergunta() : Observable<any> {
    return this.http.get(`${this.baseUrl}/perguntas`);
  }
   /**
   * @PostMapping("/pergunta")
	 * @ApiOperation(value="Cadastra uma pergunta")
   */
  cadastraPergunta(pergunta: PerguntaModule) : Observable<any> {
    return this.http.post(`${this.baseUrl}/pergunta/`, pergunta);
  }
   /**
   * @PostMapping("/opcao")
	 * @ApiOperation(value="Cadastra opcoes")
   */
  cadastraOpcao(opcao: OpcaoModule): Observable<any> {
    return this.http.post(`${this.baseUrl}/opcao/`, opcao);
  }
  /**
   * @PostMapping("/usuario")
	 * @ApiOperation(value="Cadastra um usuario")
   */
  cadastraUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/`, usuario);
  }

}
