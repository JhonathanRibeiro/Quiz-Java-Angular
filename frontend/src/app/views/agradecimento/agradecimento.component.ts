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
    this.nome = this.auth.getStorage('nome');
  }

}
