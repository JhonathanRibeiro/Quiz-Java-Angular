import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.css']
})
export class AgradecimentoComponent implements OnInit {
  @Input() public nome: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    window.history.forward();
    this.nome = this.auth.getStorage('nome');
    /*Irá remover o usuário do localstorage e em seguida redirecionar
    *para a tela de login, nesta etapa, um método irá verificar se o 
    *usuário informado já existe no sistema, caso exista, não deverá
    *permitir realizar o login.
    */
    setTimeout(()=>{
      this.auth.clearStorage();
      window.location.replace("/login");
    }, 5000);
  }

}
